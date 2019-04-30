import React, { useState } from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Paper from '@material-ui/core/Paper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeRounded from '@material-ui/icons/HomeRounded'
import ExploreRounded from '@material-ui/icons/ExploreRounded'
import PermIdentityRounded from '@material-ui/icons/PermIdentityRounded'
import AddBoxRounded from '@material-ui/icons/AddBoxRounded'
import PeopleOutlineRounded from '@material-ui/icons/PeopleOutlineRounded'

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
  const [value, setValue] = useState(Router.pathname)

  const handleChange = (event, value) => {
    if (value !== 'new') {
      setValue(value)
      Router.replace(`${value}`)
    }
  }

  return (
    <Paper className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.nav}
      >
        <BottomNavigationAction disableRipple label='首页' value='/' icon={<HomeRounded />} />
        <BottomNavigationAction disableRipple label='发现' value='/explore' icon={<ExploreRounded />} />
        <BottomNavigationAction disableRipple value='new' icon={<AddBoxRounded htmlColor='#7cb342' fontSize='large' />} />
        <BottomNavigationAction disableRipple label='动态' value='/feed' icon={<PeopleOutlineRounded />} />
        <BottomNavigationAction disableRipple label='我的' value='/user' icon={<PermIdentityRounded />} />
      </BottomNavigation>
    </Paper>
  )
}

export default NavBar
