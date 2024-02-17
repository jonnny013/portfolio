import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Project } from '../../types'
import Projects from './Projects'
import { useQuery } from '@tanstack/react-query'
import LoadingScreen from '../LoadingScreen'
import { getProjects } from '../../services/projectsServices'
import Error from '../Error'
import CarouselBottomBar from './CarouselBottomBar'

const Carousel = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const [time, setTime] = useState(5)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  let projects: Project[] = []

  const result = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (projectIndex < projects.length - 1) {
        setProjectIndex(projectIndex + 1)
      } else {
        setProjectIndex(0)
      }
      setAnimationKey(animationKey + 1)
      setTime(5)
    }, time * 1000)
    return () => clearTimeout(timer)
  }, [animationKey, projectIndex, projects.length, time])

  if (result.isLoading) {
    return <LoadingScreen />
  }
  if (result.isError) {
    return <Error />
  }

  if (result) {
    if (result.data) {
      projects = result.data
    }
  }


  function handleTouchStart(e: React.TouchEvent) {
    if (e.targetTouches[0]) {
      setTouchStart(e.targetTouches[0].clientX)
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (e.targetTouches[0]) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 70) {
      nextProject()
    }
    if (touchStart - touchEnd < -70) {
      prevProject()
    }
  }

  const nextProject = () => {
    if (projectIndex < projects.length - 1) {
      setProjectIndex(projectIndex + 1)
    } else {
      setProjectIndex(0)
    }
    setAnimationKey(animationKey + 1)
    setTime(15)
  }

  const prevProject = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1)
    } else {
      setProjectIndex(projects.length - 1)
    }
    setAnimationKey(animationKey + 1)
    setTime(15)
  }

  const BottomBarOnClick = (index: number) => {
    setProjectIndex(index)
    setAnimationKey(animationKey + 1)
    setTime(15)
  } 

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
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects
          .sort((a, b) => (a.recommended === b.recommended ? 0 : a.recommended ? -1 : 1))
          .map((project: Project, index: number) => {
            return (
              <Projects
                key={index}
                project={project}
                index={index}
                projectIndex={projectIndex}
              />
            )
          })}

        <div
          id='carouselPageBar'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {projects
            .map((_a, index) => {
              return (
                <CarouselBottomBar
                  index={index}
                  animationKey={animationKey}
                  projectIndex={projectIndex}
                  key={index}
                  time={time}
                  BottomBarOnClick={BottomBarOnClick}
                />
              )
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
  )
}

export default Carousel
