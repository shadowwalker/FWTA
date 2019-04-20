import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import NavBar from '../NavBar'

const useStyles = makeStyles((theme: Theme) => ({
  default: {
    height: '100%',
    flexWrap: 'nowrap'
  }
}))

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  useEffect(() => {
    //init()
  }, [])

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

export default Layout
