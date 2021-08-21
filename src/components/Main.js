import { Avatar, Divider, Fab } from '@material-ui/core'
import {   AccountBalance, ArrowBackIosOutlined, ArrowDownwardRounded, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import './Main.css'

function Main() {
    return (
        <main style={{width: "100%", paddingBottom: "90px", color:"#fff", padding: "0 32px"}}>
           <header className="header-main">
                <div style={{height:"57px", display: "flex", justifyContent:"space-between", alignItems:"center"}}>
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
                            <Avatar style={{height: 30, width: 30, marginLeft: "-7px", marginRight: 10}} />
                            nsfolk
                            <ArrowDownwardRounded style={{ marginLeft: 10 }}/>
                        </Fab>
                    </div>
                </div>
                <section style={{paddingTop: 24,textAlign: "left"}}>
                    <h1 style={{fontSize: 32}}>สวัสดีตอนเย็น</h1>
                </section>
                <section style={{display: "flex", flexWrap: "wrap"}}>
                    {[1,2,3,4,5,6,7,8,9,10].map(data => (
                        <div style={{width: 288, height: 80}}>Card: {data}</div>
                    ))}
                </section>
           </header>
        </main>
    )
}

export default Main
