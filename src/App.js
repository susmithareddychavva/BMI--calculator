import React, {useState} from 'react'

import './index.css'

function App() {
  //state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  

  let calcBmi = (event) => {
  //prevent Submitting
   event.preventDefault()

   if(weight === 0 || height === 0) {
     alert('please enter a valid weight and height')
   }else{
      let bmi = (weight / (height / 100) ** 2)
      setBmi(bmi.toFixed())
     
     //Logic for message
      if(bmi < 18.5) {
        setMessage('You are underweight in range')
      }else if(bmi >= 18.5 && bmi <= 24.9) {
        setMessage('You are in a healthy weight range')
      }else if(bmi>= 25 && bmi <= 29.9) {
        setMessage('You are overWeight')
      } else{
        setMessage('You are Obese')
      }   


    }
   }
  let reload = () =>{
    window.location.reload()
  }
  return (
    <div className="app">
       <div className='container'>
         <h2 className='center'>BMI Calculator</h2>
         <form onSubmit={calcBmi}>
           <div>
             <label>Enter your weight in (kg)</label>
             <input value={weight} onChange={(event) => setWeight(event.target.value)} />
           </div>
           <div>
             <label>Enter your height in (cm)</label>
             <input value={height} onChange={(event) => setHeight(event.target.value)}/>
           </div>
           <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
           </div>
         </form>
         <div className='center'>
           <h3>Your BMI is: {bmi}</h3>
           <p>{message}</p>
         </div>
       </div>     
    </div>
  );
}

export default App;


