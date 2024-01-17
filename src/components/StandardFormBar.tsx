import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface propTypes {
  id: string
  label: string
  type: string
  helperText?: string | undefined
}

const styles = {
  resize: {
    style: {fontSize: 20}
  }
}

const StandardFormBar = ({id, label, type, helperText}: propTypes) => {
  return (
    <>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' },
        }}
      >
        <TextField
          inputProps={styles.resize}
          InputLabelProps={styles.resize}
          variant='filled'
          id={id}
          label={label}
          type={type}
          helperText={helperText ? helperText : undefined}
        ></TextField>
      </Box>
    </>
  )
}

export default StandardFormBar
