/* eslint-disable react-refresh/only-export-components */
import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'

type DarkModeAction = { type: 'TOGGLE_DARK' } | { type: 'ClIENT_PREFERENCE' }

const darkModeReducer = (state: { darkMode: boolean }, action: DarkModeAction) => {
  switch (action.type) {
    case 'TOGGLE_DARK':
      return { ...state, darkMode: !state.darkMode }
    case 'ClIENT_PREFERENCE':
      return { ...state, darkMode: true }
    default:
      return state
  }
}
const initialState = {
  darkMode: false,
}
export type DarkModeContextType = [
  state: { darkMode: boolean },
  dispatch: Dispatch<DarkModeAction>
]
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, darkModeDispatch] = useReducer(darkModeReducer, initialState)

  return (
    <DarkModeContext.Provider value={[darkMode, darkModeDispatch]}>
      {children}
    </DarkModeContext.Provider>
  )
}
export const useDarkModeValue = () => {
  const darkModeAndDispatch = useContext(DarkModeContext)
  if (darkModeAndDispatch) return darkModeAndDispatch[0]
}

export const useDarkModeDispatch = () => {
  const darkModeAndDispatch = useContext(DarkModeContext)
  if (darkModeAndDispatch) return darkModeAndDispatch[1]
}

export default DarkModeContext
