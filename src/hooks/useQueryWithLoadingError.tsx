import { useQuery } from '@tanstack/react-query'
import LoadingScreen from '../components/LoadingScreen'
import { useNotificationDispatch } from '../contexts/notificationContext'
import type { QueryFunction } from '@tanstack/react-query'
import { useEffect } from 'react'

const useQueryWithLoadingError = (
  queryKey: string,
  queryFn: QueryFunction<unknown, string[], never> | undefined,
  refetchOnWindowFocus?: boolean
) => {
  const notificationDispatch = useNotificationDispatch()
  const result = useQuery({ queryKey: [queryKey], queryFn, refetchOnWindowFocus })

  useEffect(() => {
    if (result.isError) {
      notificationDispatch({ type: 'ERROR', payload: result.error })
    }
  }, [result.isError, result.error, notificationDispatch])

  if (result.isLoading) {
    return { isLoading: true, data: null, error: null, loadingScreen: <LoadingScreen /> }
  }

  if (result.isError) {
    return { isLoading: false, data: null, error: result.error }
  }

  return { isLoading: false, data: result.data, error: null }
}
export default useQueryWithLoadingError
