import { getAboutMe } from '../../services/aboutMeServices'
import type { AboutMe } from '../../types/types'
import InfoCards from './components/InfoCards'
import { useState } from 'react'
import SearchBar from '../../components/SearchBar'
import useQueryWithLoadingError from '../../hooks/useQueryWithLoadingError'

const styles = {
  container: {
    width: 'auto',
    display: 'flex',
    overflow: 'scroll',
    margin: 'auto',
    alignItems: 'center',
  },
  mainContainer: {
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
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    e.preventDefault()
    setFiltered(e.target.value)
  }
  let unfilteredInfoCards: AboutMe[] = []
  const { isLoading, data, error, loadingScreen } = useQueryWithLoadingError(
    'aboutMeInfoCards',
    getAboutMe,
    false,
  )

  if (isLoading) {
    return loadingScreen
  }
  if (error) {
    return null
  }

  if (data) {
    unfilteredInfoCards = data as AboutMe[]
  }

  const infoCards: AboutMe[] = unfilteredInfoCards.filter(
    a =>
      a.description.toLowerCase().match(filtered.toLowerCase()) ||
      a.name.toLowerCase().match(filtered.toLowerCase()) ||
      a.type.toLowerCase().match(filtered.toLowerCase()),
  )
  const personal = infoCards.filter(card => card.type === 'Personal')

  const experience = infoCards.filter(card => card.type === 'Experience')

  const certificate = infoCards.filter(card => card.type === 'Certificate')
  return (
    <div style={styles.mainContainer} className='ninetyPercent marginAuto'>
      <SearchBar title='' label='Search here...' onChange={searchBarOnChange} />
      {personal.length > 0 && <h1 style={styles.title}>About me</h1>}
      <div className='aboutMeOuterContainer'>
        <div style={styles.container} className='aboutMeInner'>
          {personal.map((card: AboutMe) => (
            <InfoCards card={card} key={card.id} />
          ))}
        </div>
      </div>
      {experience.length > 0 && (
        <>
          <h1 style={styles.title}>Experience</h1>
          <div className='aboutMeOuterContainer'>
            <div style={styles.container} className='aboutMeInner'>
              {experience.map((card: AboutMe) => (
                <InfoCards card={card} key={card.id} />
              ))}
            </div>
          </div>
        </>
      )}
      {certificate.length > 0 && <h1 style={styles.title}>Certifications</h1>}
      <div className='aboutMeOuterContainer'>
        <div style={styles.container} className='aboutMeInner'>
          {certificate.map((card: AboutMe) => (
            <InfoCards card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutIndex
