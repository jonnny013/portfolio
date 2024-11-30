/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react'
import type { ReactNode } from 'react'
import { NotificationAction, NotificationState } from '../types/reducerTypes'

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, message: action.payload, style: 'success' }
    case 'RESET':
      return { ...state, message: null }
    case 'ERROR': {
      let errorMessage = ''
      const data = action.payload.response?.data

      if (data && typeof data === 'object' && 'error' in data) {
        errorMessage = data.error ?? ''
      } else if (typeof data === 'string') {
        errorMessage = data
      } else if (action.payload.message) {
        errorMessage = action.payload.message
      } else {
        errorMessage = JSON.stringify(action.payload)
      }

      return { ...state, message: errorMessage, style: 'error' }
    }
    default:
      return state
  }
}

const initialState: NotificationState = {
  message: null as string | null,
  style: 'success' as 'success' | 'error' | 'warning' | 'info',
}

const NotificationContext = createContext<
  [NotificationState, React.Dispatch<NotificationAction>]
>([initialState, () => {}])

type NotificationContextProviderProps = {
  children: ReactNode
}
export const NotificationContextProvider = ({
  children,
}: NotificationContextProviderProps) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    initialState
  )

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

export default NotificationContext
