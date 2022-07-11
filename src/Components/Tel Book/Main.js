import React, { useState } from 'react'
import Add from './Add'
import './Main.scss'
import Person from './Person'
import { Search } from './Search'


export const states = React.createContext()


export default function Main() {
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
      <button className='add' onClick={()=>setCreate(!create)}>{localStorage.getItem("language") == "en"? "Add":"Ավելացնել"}</button>
      {create? <Add  setCreate={setCreate} create={create}/> : null}
      <Search />
      <div className='table'>
        <div className='paragraphName'>{localStorage.getItem("language") == "en"? "Name":"Անուն"}</div>
        <div className='paragraphName'>{localStorage.getItem("language") == "en"? "User Name":"Ազգանուն"}</div>
        <div className='paragraphName'>{localStorage.getItem("language") == "en"? "Phone":"Հեռախոսահամար"}</div>
        <div className='paragraphName' id='writeEmail'>{localStorage.getItem("language") == "en"? "Email":"Էլ.Հասցե"}</div>
        <div className='paragraphName' >{localStorage.getItem("language") == "en"? "Edit Delete":"Փոփոխել/Ջնջել"}</div>
        <div className='paragraphName'>{localStorage.getItem("language") == "en"? "Info":"Ինֆո"}</div>
        <states.Provider value={[text,setText]}>
          <Person />
        </states.Provider>
      </div>      
    </div>
  )
}
