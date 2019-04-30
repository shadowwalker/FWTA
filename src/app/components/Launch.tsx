import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    flexWrap: 'nowrap'
  }
}))

type Props = {
  //
}

const Layout = ({}: Props) => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.root}
      container
      direction='column'
      alignItems='center'
      justify='center'
    >
      <h1>FWTA</h1>
    </Grid>
  )
}

export default Layout
