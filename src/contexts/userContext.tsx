import { Dispatch, ReactNode, createContext, useReducer } from 'react'

type UserAction = { type: 'LOGIN'; userToken: string } | { type: 'LOGOUT' };

const userReducer = (state: { userToken: string | undefined }, action: UserAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { userToken: `Bearer ${action.userToken}` }
    case 'LOGOUT':
      return { userToken: undefined }
    default:
      return state
  }
}
const initialState = {
  userToken: undefined,
}
export type UserContextType = [
  state: { userToken: string | undefined },
  dispatch: Dispatch<UserAction>
]
const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, userDispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={[user, userDispatch]}>{children}</UserContext.Provider>
  )
}

export default UserContext
