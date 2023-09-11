// import React from 'react';
import girlSucces from "../assets/girl-succes.png"
import balloons from "../assets/balloons.png"
import deh from "../assets/deh.png"
import fireworks from "../assets/firewoks.png"
import '../Cases.css'


export default function Success(){
    return (
        <div>
            <div className='home'>
                <div className='girlCase'>
                    <div className="homeBalloonsSuccess">
                        <img src={balloons} alt="" />
                    </div>
                    <img id="girl" src={girlSucces} alt="" />
                </div>
                <div className='mainCase'>
                    <img id="deh" src={deh} alt=""/>
                    <div className="divSuccess">
                        <p className="textSuccess">Η υποβολή συμμετοχής ολοκληρώθηκε με επιτυχία!</p> 
                        <img id="fireworks" src={fireworks} alt="" />
                    </div>
                    <p className="mainText">Ολοκλήρωσες την εγγραφή για την συμμετοχή σου στον διαγωνισμό.</p>
                    <p className="mainText">Καλή επιτυχία!</p>
                    <p className="mainText">Τα αποτελέσματα θα ανακοινωθούν στις 07/6/21</p>
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