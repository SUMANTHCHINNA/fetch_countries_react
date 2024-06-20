import { DomUtil } from 'leaflet'
import React,{useState} from 'react'
function Counter(){
    let [count,setCount] = useState(0)
    const l = () => {
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
    }
    
    const d = () => {
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
    }

    return (
        <>
        <button onClick={l}>LIGHT</button>
        <button onClick={d}>DARK</button>
        <center><div>
        <h1><strong><b>{count}</b></strong></h1>
        <button style={{background:'blue',padding:'10px 40px',borderRadius:'5px',fontSize:'16px'}} onClick={() => {setCount(count+=1)}}>INCREASE</button><br/><br/>
        <button style={{background:'red',padding:'10px 40px',borderRadius:'5px',fontSize:'16px'}} onClick={() => {setCount(count-=1)}}>DECREASE</button>
        </div></center>
        </>
    )
}

export default Counter