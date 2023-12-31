import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {Project} from '../../types';
import Projects from './Projects';

const Carousel = ({projects}: {projects: Project[]}) => {
  const [projectIndex, setProjectIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const [time, setTime] = useState(5);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 100) {
      // do your stuff here for left swipe
      nextProject();
    }

    if (touchStart - touchEnd < -100) {
      // do your stuff here for right swipe
      prevProject();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (projectIndex < projects.length - 1) {
        setProjectIndex(projectIndex + 1);
      } else {
        setProjectIndex(0);
      }
      setAnimationKey(animationKey + 1);
      setTime(5);
    }, time * 1000);
    return () => clearTimeout(timer);
  }, [projectIndex, projects]);

  const nextProject = () => {
    if (projectIndex < projects.length - 1) {
      setProjectIndex(projectIndex + 1);
    } else {
      setProjectIndex(0);
    }
    setAnimationKey(animationKey + 1);
    setTime(15);
  };

  const prevProject = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    } else {
      setProjectIndex(projects.length - 1);
    }
    setAnimationKey(animationKey + 1);
    setTime(15);
  };

  const BottomBarOnClick = (index: number) => {
    setProjectIndex(index);
    setAnimationKey(animationKey + 1);
    setTime(15);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        margin: 0,
        justifyContent: 'center',
      }}
    >
      <button className='previous-button buttons' onClick={prevProject}>{`<`}</button>
      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project: Project, index: number) => {
          return (
            <Projects
              key={index}
              project={project}
              index={index}
              projectIndex={projectIndex}
            />
          );
        })}

        <div
          id='carouselPageBar'
          style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
        >
          {projects.map((_a, index) => {
            return (
              <div
                key={index}
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: index !== projectIndex ? 'black' : 'white',
                  borderRadius: 50,
                }}
                onClick={() => BottomBarOnClick(index)}
              ></div>
            );
          })}
        </div>
      </div>
      <button className='next-button buttons' onClick={nextProject}>
        <p className='span'>{`>`}</p>
        <motion.div
          className='progressBar'
          key={animationKey}
          animate={{
            width: `100%`,
            transitionEnd: {
              width: '0%',
            },
          }}
          transition={{
            duration: time,
          }}
        />
      </button>
    </div>
  );
};

export default Carousel;
