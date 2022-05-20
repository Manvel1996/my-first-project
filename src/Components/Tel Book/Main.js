import React, { useState } from 'react'
import Add from './Add'
import './Main.scss'
import Person from './Person'
import { Search } from './Search'

export default function Main({setLogin}) {
  const[text,setText] = useState(0)
  const[create,setCreate] = useState(false)
  



  let massiv = JSON.parse(localStorage.getItem("userFirstList"))
  if(localStorage.getItem("userList") === null && localStorage.getItem("userFirstList") !== null){
    massiv.map((elem)=>{
      return(
        elem.myDate = new Date
      )
    })
    localStorage.setItem("userList",JSON.stringify(massiv))
  }


 
  return (
    <div className='app'>
      <button className='add' onClick={()=>setCreate(!create)}>Add</button>
      {create? <Add  setCreate={setCreate} create={create}/> : null}
      <Search />
      <div className='table'>
        <div className='paragraphName'>Name</div>
        <div className='paragraphName'>User Name</div>
        <div className='paragraphName'>Phone</div>
        <div className='paragraphName' id='writeEmail'>Email</div>
        <div className='paragraphName' >Raiting</div>
        <div className='paragraphName' >Edit Delete</div>
        <div className='paragraphName'>Info</div>
        <Person setText={setText} text={text} />
      </div>      
    </div>
  )
}
