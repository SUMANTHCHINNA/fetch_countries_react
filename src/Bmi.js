import React,{ useRef, useState } from "react";
function Bmi(){
const w_ref = useRef(null)
const h_ref = useRef(null)
const [result,setResult] = useState(null)
const [inf,setInf] = useState(null)


const light = () =>{
  document.body.style.backgroundColor='white'
  document.body.style.color="black"
}

const dark = () => {
  document.body.style.backgroundColor='black'
  document.body.style.color='white'

}

const logic = (event) =>{
  event.preventDefault()
  const w = parseFloat(w_ref.current.value)
  const h = parseFloat(h_ref.current.value)
  const ans = (w/(h*h))
  setResult(ans.toFixed(1))
  if(ans < 18.5){
    setInf(<h3 style={{color:'blue'}}>Under Weight</h3>)
  }
  else if(ans > 18.5 && ans < 25){
    setInf(<h3 style={{color:'green'}}>Normal Weight</h3>)
  }
  else if(ans > 25 && ans < 29.9){
    setInf(<h3 style={{color:'red'}}>Over Weight</h3>)
  }
  else if(ans > 30){
    setInf(<h3 style={{color:'darkred'}}>Obesity</h3>)
  }

}

  return(
    <>
    <div>
      <button onClick={light}>LiGHT</button>
      <button onClick={dark}>DARK</button>
    
    <form>
      <table border='3' align="center">
      <th style={{background : 'red'}}><h1 ><strong>BMI CALCULATOR</strong></h1></th>
      <tr><h3>Weight</h3> </tr>
      <tr><strong><input type="number" placeholder="Enter Weight in (kg)" ref={w_ref}/></strong>----(kg)</tr>
      <tr><h3>Height </h3> </tr>
      <tr><input type="number" placeholder="Enter Height in (m)" ref={h_ref}/>----(m)</tr>
      <br/>
      <center><button onClick={logic} style={{background:'blue',padding:'10px 40px',borderRadius:'5px',cursor:'pointer',fontSize:'16px'}}>SUBMIT</button></center>
      <br/>
      <strong><hr/></strong>
      <tr>
      <div>
      {result !== null &&(
        <>
        <center><strong><h2>INFORMATION</h2></strong></center>
        <center><strong><h1 style={{color:'orange'}}>{result}</h1></strong></center>
        <center><h2>{inf}</h2></center>
        
        </>
      )}
    </div>

      </tr>

      </table> 
    </form>
    </div>

    </>
  
  )
}
export default  Bmi
