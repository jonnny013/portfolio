import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import { Project } from '../types';
import Projects from './Projects';

const Carousel = ({projects}: {projects: Project[]}) => {
  const [projectIndex, setProjectIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const [time, setTime] = useState(5);

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
    setTime(10);
  };

  const prevProject = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    } else {
      setProjectIndex(projects.length - 1);
    }
    setAnimationKey(animationKey + 1);
    setTime(10);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 10, margin: 0}}>
      <button className='previous-button buttons' onClick={prevProject}>{`<`}</button>
      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}
      >
        
          {projects.map((project: string, index: number) => {
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
          style={{
            height: 50,
            width: 300,
            backgroundColor: 'gray',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
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
                onClick={() => setProjectIndex(index)}
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
