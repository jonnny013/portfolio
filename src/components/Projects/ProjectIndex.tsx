import Carousel from './Carousel'
import SearchBar from '../SearchBar'
import { useState } from 'react'

const ProjectIndex = () => {
  const [filtered, setFiltered] = useState('')
  const searchBarOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault()
    setFiltered(e.target.value)
  }
  return (
    <>
      <SearchBar
        title='Find a project'
        label='Search here...'
        onChange={searchBarOnChange}
      />
      <Carousel filtered={filtered} />
    </>
  )
}

export default ProjectIndex