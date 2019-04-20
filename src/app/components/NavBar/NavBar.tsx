import React, { useState } from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Paper from '@material-ui/core/Paper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ExploreRounded from '@material-ui/icons/ExploreRounded'
import ChromeReaderModeRounded from '@material-ui/icons/ChromeReaderModeRounded'
import NotesRounded from '@material-ui/icons/NotesRounded'
import FaceRounded from '@material-ui/icons/FaceRounded'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 600,
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  nav: {
    with: '100%'
  }
}))

type Props = {
  //
}

const NavBar = ({}: Props) => {
  const classes = useStyles()
  const [value, setValue] = useState('explore')
  
  const handleChange = (event, value) => {
    setValue(value)
    Router.replace(`/${value === 'explore' ? '' : value}`)
  }

  return (
    <Paper className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.nav}
      >
        <BottomNavigationAction disableRipple label='Explore' value='explore' icon={<ExploreRounded />} />
        <BottomNavigationAction disableRipple label='Books' value='books' icon={<ChromeReaderModeRounded />} />
        <BottomNavigationAction disableRipple label='Notes' value='notes' icon={<NotesRounded />} />
        <BottomNavigationAction disableRipple label='Me' value='me' icon={<FaceRounded />} />
      </BottomNavigation>
    </Paper>
  )
}

export default NavBar
