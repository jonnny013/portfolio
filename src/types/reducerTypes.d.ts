export interface NotificationState {
  message: string | null
  style: 'success' | 'error' | 'warning' | 'info'
}

type SuccessAction = {
  type: 'SUCCESS'
  payload: string
}

type ResetAction = {
  type: 'RESET'
}

type ErrorAction = {
  type: 'ERROR'
  payload: {
    status?: number
    response?: {
      data?:
        | {
            error?: string
          }
        | string
    }
    message?: string
  }
}

export type NotificationAction = SuccessAction | ResetAction | ErrorAction
