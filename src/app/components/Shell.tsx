import React, { useEffect } from 'react'
import unstated from 'unstated-typescript'
import { withSnackbar, WithSnackbarProps } from 'notistack'
import AppContainer from '../containers/AppContainer'
import Launch from './Launch'

type Props = {
  isInitialized: boolean
  isOffline: boolean
  children: React.ReactNode
} & WithSnackbarProps

// display launch screen and initialize, otherwise display children page with layout
const Shell = ({isInitialized, isOffline, children, enqueueSnackbar, closeSnackbar}: Props) => {
  useEffect(() => {
    if (isOffline) {
      const key = enqueueSnackbar('Offline', {variant: 'error', autoHideDuration: 800})
      return () => closeSnackbar(key!)
    } else if (isInitialized) {
      const key = enqueueSnackbar('Online', {variant: 'success', autoHideDuration: 800})
      return () => closeSnackbar(key!)
    }
  }, [isOffline])

  return isInitialized ? <>{children}</> : <Launch />
}

export default withSnackbar(unstated(AppContainer, c => ({
  isInitialized: c.state.isInitialized,
  isOffline: c.state.isOffline,
  init: c.init
}))(Shell))
