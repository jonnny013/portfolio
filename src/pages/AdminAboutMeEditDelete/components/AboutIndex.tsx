import { getAboutMe } from '../../../services/aboutMeServices'
import type { AboutMe } from '../../../types/types'
import InfoCards from './InfoCards'
import useQueryWithLoadingError from '../../../hooks/useQueryWithLoadingError'

interface Styles {
  container: React.CSSProperties
}

const styles: Styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 30,
  },
}

const AboutIndex = () => {
  let infoCards: AboutMe[] = []
  const { data, isLoading, error, loadingScreen } = useQueryWithLoadingError(
    'aboutMeInfoCards',
    getAboutMe
  )

  if (isLoading) {
    return loadingScreen
  }
  if (error) {
    return null
  }

  if (data) {
    infoCards = data as AboutMe[]
  }
  return (
    <div style={styles.container}>
      {infoCards.map((card: AboutMe) => (
        <InfoCards
          card={card}
          key={card.id}
        />
      ))}
    </div>
  )
}

export default AboutIndex
