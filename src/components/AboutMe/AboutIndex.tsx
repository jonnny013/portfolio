import { getAboutMe } from '../../services/aboutMeServices'
import type { AboutMe } from '../../types'
import LoadingScreen from '../LoadingScreen'
import Error from '../Error'
import { useQuery } from '@tanstack/react-query'
import InfoCards from './InfoCards'
import SearchBar from '../SearchBar'
import { useState } from 'react'
interface Styles {
  container: React.CSSProperties
}

const styles: Styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 30
  }
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
    
  return (
    <>
      <SearchBar
        title=''
        label='Search here...'
        onChange={searchBarOnChange}
      />
      <div style={styles.container}>
        {infoCards.map((card: AboutMe) => (
          <InfoCards card={card} key={card.id} />
        ))}
      </div>
    </>
  )
}

export default AboutIndex
