import React from 'react'

import LeftDrawer from './components/LeftDrawer'
import Player from './components/Player'
import Main from './components/Main'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
}));

function Home() {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <LeftDrawer/>
            <Main />
            <Player />
        </div>
    )
}

export default Home
