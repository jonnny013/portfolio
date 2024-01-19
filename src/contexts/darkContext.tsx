import { Dispatch, ReactNode, createContext, useReducer } from 'react'

 type DarkModeAction = { type: 'TOGGLE_DARK' }

 const darkModeReducer = (state: { darkMode: boolean }, action: DarkModeAction) => {
  switch (action.type) {
    case "TOGGLE_DARK":
      return {...state, darkMode: !state.darkMode}
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

export default DarkModeContext
