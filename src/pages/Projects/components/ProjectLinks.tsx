import StandardButton from '../../../components/StandardButton'

interface props {
  projectURL: string
  sourceURL?: string | null | undefined
}

const styles = {
  margin: 10,
}

const ProjectLinks = ({ projectURL, sourceURL }: props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <StandardButton
        text='Project'
        type='button'
        onClick={() => window.open(projectURL, '_blank')}
        style={styles}
      />
      <StandardButton
        text='Source'
        type='button'
        style={styles}
        disabled={sourceURL ? false : true}
        onClick={() => {
          if (sourceURL) {
            window.open(sourceURL, '_blank')
          }
        }}
      />
    </div>
  )
}

export default ProjectLinks
