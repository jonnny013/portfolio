import { getAboutMe } from '../../services/aboutMeServices'
import type { AboutMe } from '../../types'
import LoadingScreen from '../LoadingScreen'
import Error from '../Error'
import { useQuery } from '@tanstack/react-query'
import InfoCards from './InfoCards'
import SearchBar from '../SearchBar'
import { useState } from 'react'

const styles = {
  container: {
    width: 'auto',
    display: 'flex',
    overflow: 'scroll',
    gap: 30,
    margin: 'auto',
    alignItems: 'center',
  },
  mainContainer: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  title: {
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
}

const AboutIndex = () => {
  const [filtered, setFiltered] = useState('')
  const searchBarOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault()
    setFiltered(e.target.value)
  }
  let unfilteredInfoCards: AboutMe[] = []
  
  const result = useQuery({
    queryKey: ['aboutMeInfoCards'],
    queryFn: getAboutMe,
    refetchOnWindowFocus: false,
  })

  if (result.isLoading) {
    return <LoadingScreen />
  }
  if (result.isError) {
    return <Error />
  }

  if (result) {
    if (result.data) {
      unfilteredInfoCards = result.data
    }
  }

  const infoCards: AboutMe[] = unfilteredInfoCards.filter(
    a =>
      a.description.toLowerCase().match(filtered.toLowerCase()) ||
      a.name.toLowerCase().match(filtered.toLowerCase()) ||
      a.type.toLowerCase().match(filtered.toLowerCase())
  )
  const personal = infoCards.filter(card => (
    card.type === 'Personal'
  ))

  const experience = infoCards.filter(card => (
    card.type === 'Experience'
  ))
    
  const certificate = infoCards.filter(card => (
    card.type === 'Certificate'
  ))
  return (
    <div style={styles.mainContainer}>
      <SearchBar title='' label='Search here...' onChange={searchBarOnChange} />
      {personal.length > 0 && <h1 style={styles.title}>About me</h1>}
      <div className='aboutMeOutterContainer'>
        <div style={styles.container}>
          {personal.map((card: AboutMe) => (
            <InfoCards card={card} key={card.id} />
          ))}
        </div>
      </div>
      {certificate.length > 0 && <h1 style={styles.title}>Certifications</h1>}
      <div className='aboutMeOutterContainer'>
        <div style={styles.container}>
          {certificate.map((card: AboutMe) => (
            <InfoCards card={card} key={card.id} />
          ))}
        </div>
      </div>
      {experience.length > 0 && <h1 style={styles.title}>Experience</h1>}
      <div className='aboutMeOutterContainer'>
        <div style={styles.container}>
          {experience.map((card: AboutMe) => (
            <InfoCards card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutIndex
