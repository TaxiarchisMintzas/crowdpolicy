import React, { useState } from 'react'
import './App.css'
import Home from"./components/Home"
import balloons from "./assets/balloons.png"
import { createUser } from './api/createUser'


export default function App() {
  const [user, setUser] = useState(
    {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    }
  )

  async function handleCreateUser(event: React.FormEvent) {
    event.preventDefault();

    
    try{
      console.log(user);
      // const signUpDate= new Date();
      const newUser = await createUser(user);
      setUser(newUser);
    }
    catch(err){
      alert(err);
    }
  }

    
  async function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    
    const {name, value} = event.target;
    setUser((prevUserInfo) =>{
      return {
        ...prevUserInfo,
        [name]: value
      };
    })
  }

  return (
    <div>
      <Home />
      <div id="container" className='container'>
        <div className='balloons'>
          <img src={balloons} alt="" />
        </div>
        <div className='column'>
          <p className='formInfo'>Πριν συμπληρώσεις τα στοιχεία σου σε ενημερώνουμε ότι η εκτελούσα επεξεργασίας 
            εταιρεία είναι η Crowdpolicy και η Υπεύθυνη Επεξεργασίας είναι η ΔΕΗ, για περισσότερες 
            πληροφορίες δες τους όρους συμμετοχής εδώ <span><a href="https://chatbot.dei.gr/bday/terms">https://chatbot.dei.gr/bday/terms</a></span>
          </p>
          <form onSubmit={handleCreateUser}>
            <div className='column'>
              <label id='firstName' className="form-label">Όνομα*</label>
              <input 
                id='firstName'
                type='text'
                className='form-control'
                name="firstName"
                onChange={handleChange}
                value={user.firstName}
                required
              />
            </div>
            <div className='column'>
              <label id='lastName' className="form-label">Επώνυμο*</label>
              <input 
                id='lastName'
                type='text'
                className='form-control'
                name="lastName"
                onChange={handleChange}
                value={user.lastName}
                required
                />
            </div>
            <div className='column'>
              <label id='number' className='form-label'>Τηλέφωνο*</label>
              <input 
                id='number'
                type=''
                className='form-control'
                name="number"
                onChange={handleChange}
                value={user.number}
                required
                />
              <p>Το τηλέφωνο να είναι 10 ψηφία και της μορφής 69ΧΧΧΧΧΧΧΧ</p>
            </div>
            <div className='column'>
              <label id='email' className='form-label'>Email*</label>
              <input 
                id='email'
                type='email'
                className='form-control'
                name="email"
                onChange={handleChange}
                value={user.email}
                required
                />
              <p>Το email να είναι της μορφής someone@example.com</p>
            </div>
            <div className='column'>
              <label>Δηλώνω ότι:</label>
              <div className='containerCheckbox'>
                <input type="checkbox" required/>
                <p>Ναι, έχω ολοκληρώσει τα παρακάτω βήματα*</p>
              </div>
              <div>
                <ul>
                  <li>Έχω συνομιλήσει με την αυτόματη ψηφιακή βοηθό μέσω messenger ή viber</li>
                  <li>Έχω ευχηθεί με σχόλιο και έχω κάνει like στο post του διαγωνισμού στο Facebook https://www.facebook.com/DEHChatbot</li>
                </ul>
              </div>
              <div className='containerCheckbox'>
                <input type="checkbox" required/>
                <p>Αποδέχομαι τους <span style={{textDecoration: 'underline'}}>όρους συμμετοχής</span>*</p>
              </div>
                <p className='requisite'>Τα πεδία με αστερίσκο (*) είναι υποχρεωτικά.</p>

            </div>

            <button>ΥΠΟΒΟΛΗ ΦΟΡΜΑΣ</button>
          </form>
        </div>
        <div>
          
        </div>

            </div>
      </div>
)}

