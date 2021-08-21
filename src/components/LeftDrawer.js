import React from 'react'

import { Divider, Drawer,List,ListItem,ListItemIcon,ListItemText, makeStyles,ListSubheader } from '@material-ui/core'
import { BookOutlined, Create, FavoriteRounded, HomeOutlined, SearchOutlined } from '@material-ui/icons'
import { Scrollbar } from 'react-scrollbars-custom'

import logo from '../assets/Spotify_Logo_CMYK_Black.png'

const drawerWidth = 241;

const useStyles = makeStyles((theme) => (
    {
        drawer: {
            width : drawerWidth,
            zIndex: 0
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#000',
            paddingTop: '24px',
        },
        text : {
            color : '#fff'
        },
        icon: {
            color: '#fff',
            paddingLeft: '8px'
        },
        divider: {
            color: '#fff'
        },
        root: {
            width: '100%',
            maxWidth: 360,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 403,
            color: '#fff'
          },
          listSection: {
            backgroundColor: 'inherit',
          },
          ul: {
            backgroundColor: 'inherit',
            padding: 0,
          },
    }
))

function LeftDrawer() {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
              }}
            anchor="left"
        >
            <img src={logo} alt="logo" style={{maxWidth:'131px', maxHeight: '40px', margin: '0 24px 18px 24px',filter: 'invert(1)'}}></img>
            <List>
                {
                    [
                        {name : 'หน้าหลัก',icon : <HomeOutlined />}, 
                        {name :'ค้นหา',icon : <SearchOutlined />}, 
                        {name :'คอลเลกชันของคุณ',icon : <BookOutlined />}
                    ].map((data, index) => (

                        <ListItem button key={data.name}>
                            <ListItemIcon className={classes.icon} >
                                {data.icon}
                            </ListItemIcon>
                            <ListItemText primary={data.name} className={classes.text}/>
                        </ListItem>

                    ))
                }
            </List>
            <List>
                {
                    [
                        {name : 'สร้างเพลย์ลิสต์',icon : <Create />}, 
                        {name :'เพลงที่ถูกใจ',icon : <FavoriteRounded />}
                    ].map((data, index) => (

                        <ListItem button key={data.name}>
                            <ListItemIcon className={classes.icon} >
                                {data.icon}
                            </ListItemIcon>
                            <ListItemText primary={data.name} className={classes.text}/>
                        </ListItem>

                    ))
                }    
            </List>
            <List className={classes.root}>
                {/* <Scrollbar > */}
                {[0, 1, 2, 3, 4].map((sectionId) => (                
                    <ul className={classes.ul}>
                        {[0, 1, 2].map((item) => (
                        <ListItem key={`item-${sectionId}-${item}`}>
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                        ))}
                    </ul>
                ))}
                 {/* </Scrollbar> */}
            </List>
            
        </Drawer>
    )
}

export default LeftDrawer
