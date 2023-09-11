import girl from "../assets/girl.png"
import balloons from "../assets/balloons.png"
import deh from "../assets/deh.png"
import "../Home.css"

export default function Home(){
    return(
        <div className='home'>
            <div className='girl'>
                <img src={girl} alt="" />
                <div className="homeBalloons">
                    <img src={balloons} alt="" />
                </div>
            </div>
            <div className='main'>
                <img src={deh} alt=""/>
                <p className="homeText">Η ψηφιακή μας βοηθός έχει γενέθλια και το γιορτάζει προσφέροντας
                μοναδικά δώρα τεχνολογίας! Μίλησε της, πες της “Χρόνια Πολλά!” 
                και μπες στην κλήρωση!
                </p> 
                <p className="homeText2">Συμπλήρωσε την φόρμα</p>
                <a href="#container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}