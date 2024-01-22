import { useFormikContext } from 'formik'
import { useField } from 'formik'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { FormHelperText, Collapse, Divider } from '@mui/material'
import type { ProjectWithoutID } from '../../../types'
import { useState } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'


const StandardCheckBox = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const formik = useFormikContext()
  const { values } = formik
  const project = values as ProjectWithoutID
  const skillKeys = Object.keys(project.skills)

  const [field, meta] = useField('skills')
  const showError = meta.touched && meta.error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    field.onChange({
      target: {
        name: 'skills',
        value: {
          ...field.value,
          [name]: checked,
        },
      },
    });
  };

  return (
    <Box>
      <FormControl
        error={showError ? true : false}
        component='fieldset'
        sx={{ m: 1 }}
        variant='standard'
        {...field}
        id={'skills'}
        {...field}
      >
        <FormLabel component='legend' style={{ fontSize: 30 }} onClick={handleClick}>
          Choose project type {open ? <ExpandLess /> : <ExpandMore />}
        </FormLabel>
        <Divider />
        <Collapse in={open} timeout='auto' >
          <FormGroup
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 180,
              '& ul': { padding: 0 },
            }}
          >
            {skillKeys.map(skill => (
              <FormControlLabel
                key={skill}
                control={<Checkbox onChange={handleChange} name={skill} />}
                label={skill}
                componentsProps={{ typography: { variant: 'h4' } }}
              />
            ))}
          </FormGroup>
        </Collapse>
      </FormControl>
      <FormHelperText>{showError ? meta.error : undefined}</FormHelperText>
    </Box>
  )
}

export default StandardCheckBox
