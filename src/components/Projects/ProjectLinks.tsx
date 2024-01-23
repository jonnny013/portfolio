
import StandardButton from "../StandardButton"

interface props {
  projectURL: string,
  sourceURL?: string | null | undefined
}

const ProjectLinks = ({projectURL, sourceURL}: props) => {
  return (
    <div>
      <StandardButton
        text='Project'
        type='button'
        onClick={() => window.open(projectURL, '_blank')}
      />
      <StandardButton
        text='Source'
        type='button'
        disabled={sourceURL ? false : true}
        onClick={() => window.open(sourceURL, '_blank')}
      />
    </div>
  )
}

export default ProjectLinks