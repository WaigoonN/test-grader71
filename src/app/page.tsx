import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'

const Home = () => {
    return (
        <div className='width_normal'>
            <p className="topic">Tenz Tour&apos;s Official Website</p>
            <p style={{fontSize: "1.5em"}}>Totally not a scam</p>
            <p>Nagorn stole my idea btw</p>
            <hr></hr>

            <a href='https://youtu.be/QB7ACr7pUuE?si=G8EdFbi0d6af9_Rx' style={{textDecoration:"none"}}>
                <div style={{backgroundColor:"gray", width:"200px", marginLeft:"auto", marginRight:"auto", marginTop:"50px", fontSize:"20px", paddingTop:"5px", paddingBottom:"5px", borderRadius: "7px", color:"white"}}>
                    Book a trip
                </div>
            </a>
        </div>
    )
}

export default Home