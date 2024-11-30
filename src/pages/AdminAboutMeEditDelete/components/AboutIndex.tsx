import { getAboutMe } from '../../../services/aboutMeServices'
import type { AboutMe } from '../../../types/types'
import { useQuery } from '@tanstack/react-query'
import InfoCards from './InfoCards'
import LoadingScreen from '../../../components/LoadingScreen'
import Error from '../../../components/Error'

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

const AboutIndex = ({
  setNotification,
  notification,
}: {
  setNotification: React.Dispatch<React.SetStateAction<string | undefined>>
  notification: string | undefined
}) => {
  let infoCards: AboutMe[] = []

  const result = useQuery({
    queryKey: ['aboutMeInfoCards'],
    queryFn: getAboutMe,
  })

  if (result.isLoading) {
    return <LoadingScreen />
  }
  if (result.isError) {
    return <Error />
  }

  if (result) {
    if (result.data) {
      infoCards = result.data
    }
  }
  return (
    <div style={styles.container}>
      {infoCards.map((card: AboutMe) => (
        <InfoCards
          card={card}
          key={card.id}
          setNotification={setNotification}
          notification={notification}
        />
      ))}
    </div>
  )
}

export default AboutIndex
