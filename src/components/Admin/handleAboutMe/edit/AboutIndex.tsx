import { getAboutMe } from '../../../../services/aboutMeServices'
import type { AboutMe } from '../../../../types'
import LoadingScreen from '../../../LoadingScreen'
import Error from '../../../Error'
import { useQuery } from '@tanstack/react-query'
import InfoCards from './InfoCards'

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

const AboutIndex = ({
  setNotification,
}: {
  setNotification: React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
  let infoCards: AboutMe[] = []

  const result = useQuery({
    queryKey: ['infoCards'],
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
      infoCards = result.data
    }
  }
  return (
    <div style={styles.container}>
      {infoCards.map((card: AboutMe) => (
        <InfoCards card={card} key={card.id} setNotification={setNotification} />
      ))}
    </div>
  )
}

export default AboutIndex
