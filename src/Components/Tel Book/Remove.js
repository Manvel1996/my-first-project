import React, { useContext } from 'react'
import { states } from './Main'

export default function Remove({phone}) {
  const[text,setText] = useContext(states)
    function deleteItem(){
        let masiv = JSON.parse(localStorage.getItem("userList"))

        let newData=masiv.filter((el)=>{
           return el.phone !== phone
        })
        
        localStorage.setItem("userList",JSON.stringify(newData))
        setText(text+1)
    }
  return (
    <>
        <button onClick={deleteItem} className='removeTelBook'>{localStorage.getItem("language") == "en"? 'Delete':"Ջնջել"}</button>
    </>
  )
}
