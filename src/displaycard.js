import React from 'react'
import './App.css'
export default function Displaycard(props) {
  return (
    <div> 
        <div className='Displaycard' style={{backgroundColor:props.colors}}>
        <div className='cardcontant'><h3>{props.heading}</h3></div>
        <hr color='black' />
        <div className='cardcontant'><p>{props.title}</p></div>
        <div className='cardcontant padding'>{props.contant}</div>

        </div> 
    </div>
  )
}
