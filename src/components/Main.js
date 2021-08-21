import { Avatar, Fab, Grid, Paper  } from '@material-ui/core'
import { ArrowBackIosOutlined, ArrowDownwardRounded, ArrowForwardIosOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import './Main.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Main() {
    const classes = useStyles();
    return (
        <main style={{width: "100%", height: "auto", color:"#000"}} className={classes.root}>
           <div className="header-main" >
                <div style={{paddingTop: 20, display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display:"flex"}}>
                    <Fab size="small" style={{marginRight: 16, backgroundColor: "#000", color: "#fff", opacity: 0.5}}>
                        <ArrowBackIosOutlined />
                    </Fab>
                    <Fab size="small" style={{marginRight: 16, backgroundColor: "#000", color: "#fff", opacity: 0.5}}>
                        <ArrowForwardIosOutlined />
                    </Fab>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div>
                            <button style={{ background: "none", border: "none", color: "#fff", fontSize: 16, padding: "0 16px" }}>Premium</button>
                            <button style={{ background: "none", border: "none", color: "#fff", fontSize: 16, padding: "0 16px" }}>การสนับสนุน</button>
                            <button style={{ background: "none", border: "none", color: "#fff", fontSize: 16, padding: "0 16px" }}>ดาวน์โหลด</button>
                        </div>
                        <div style={{width: 1, height: 30, backgroundColor: "#fff", display: "inline", margin: "0 32px 0 16px" }} />
                        <Fab
                            variant="extended"
                            size="small"
                            aria-label="add"
                            style={{backgroundColor: "#000", color: "#fff"}}
                        >
                            <Avatar style={{height: 30, width: 30, marginLeft: "-7px", marginRight: 10}} >NS</Avatar>
                            nsfolk
                            <ArrowDownwardRounded style={{ marginLeft: 10 }}/>
                        </Fab>
                    </div>
                </div>
                <section style={{paddingTop: 24,textAlign: "left"}}>
                    <h1 style={{fontSize: 32, color: "#fff"}}>สวัสดีตอนเย็น</h1>
                </section>
                <Grid container spacing={2} zeroMinWidth>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(data => (
                        <Grid item lg={2} md={3} sm={6} >
                            <Paper elevation={3} style={{ height: 80, backgroundColor:"#0f0f0f", borderRadius: 5, color:"#fff", display: "flex"}}>
                                <img style={{width: 80, marginRight: 20}} src="https://mosaic.scdn.co/640/ab67616d00001e0261ff2c1a9a04a31699c39dadab67616d00001e0269bb779bed4babbc71c9c0ffab67616d00001e02b021018bc51b61b91700c6dcab67616d00001e02fbd3857d7a96cc77ea23be1d" alt="1" />
                                <p style={{display: "inline", width: 300}}>Playlist #{data}</p>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
           </div>
           <div className="content">
                asdasdasdasdasdasdasdasdasdasdasdasd
           </div>
        </main>
    )
}

export default Main
