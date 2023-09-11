// import React from 'react';
import girlFailed from "../assets/girl-failed.png"
import deh from "../assets/deh.png"
import '../Cases.css'


export default function Success(){
    return (
        <div className='home'>
            <div className='girlCase'>
                <img id="girl" src={girlFailed} alt="" />
            </div>
            <div className='mainCase'>
                <img id="deh" src={deh} alt=""/>
                <div>
                    <p className="homeText">Κάτι πήγε στραβά..</p> 
                </div>
                <div>
                    <p className="homeText">Για να συμμετέχεις στον διαγωνισμό στείλε χρόνια πολλά στην Ψηφιακή Βοηθό</p>
                    <a href="/">
                        <button>Επιστροφή στην αρχική σελίδα</button>
                    </a>
                <p className="homeText2">Μπορίες να δεις τους όρους συμμετοχής εδώ 
                    <span><a href="https://chatbot.dei.gr/1year/terms"> https://chatbot.dei.gr/1year/terms</a></span>
                </p>
                </div>
            </div>
        </div>
    )
}