import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBar'
import { withSnackbar, WithSnackbarProps } from 'notistack'
import unstated from 'unstated-typescript'
import Container from '../../containers'

const useStyles = makeStyles((theme: Theme) => ({
  default: {
    height: '100%',
    flexWrap: 'nowrap'
  }
}))

type Props = {
  isOffline: boolean
  children: React.ReactNode
  init: () => void
} & WithSnackbarProps

const Layout = ({isOffline, children, init, enqueueSnackbar}: Props) => {
  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (isOffline) {
      enqueueSnackbar('Offline', {variant: 'error', preventDuplicate: true, autoHideDuration: 800})
    } else {
      enqueueSnackbar('Online', {variant: 'success', preventDuplicate: true, autoHideDuration: 800})
    }
  }, [isOffline])

  const classes = useStyles()
  return (
    <>
    <Grid
      className={classes.default}
      container
      direction='column'
      alignItems='center'
    >
      {children}
    </Grid>
    <NavBar />
    </>
  )
}

export default withSnackbar(unstated(Container, c => ({
  isOffline: c.state.isOffline,
  init: c.init
}))(Layout))
