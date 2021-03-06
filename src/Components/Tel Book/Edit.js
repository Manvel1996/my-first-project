import React, { useContext, useState } from 'react'
import { states } from './Main'

export default function Edit({index}) {
    const [change,setChange] = useState(false)
    const [text,setText] = useContext(states)

    function editItem(e){
      e.preventDefault()
      const newEdit = Array.from(new FormData(e.target))
      let editObj = new Object
      editObj.id = index
      editObj.name = newEdit[0][1]
      editObj.username = newEdit[1][1]
      editObj.phone = newEdit[2][1]
      editObj.email = newEdit[3][1]
      let editArr0 = JSON.parse(localStorage.getItem("userList"))
      let editArr1 = editArr0.slice(0,index)
      let editArr2 = editArr0.slice(index+1,editArr0.length)
      localStorage.setItem("userList",JSON.stringify([...editArr1,editObj,...editArr2]))
      setText(text+1)
      setChange(!change)
    }
  return (
    <>
        <button onClick={()=>setChange(!change)} className='editTelBook'>{localStorage.getItem("language") == "en"? 'Edit':"Փոփոխել"}</button>
        {change?        
        <form action="#"  className='createForm' onSubmit={(e)=>editItem(e)}>
            <input type="text" placeholder={localStorage.getItem("language") == "en"? 'Name':"Անուն"} name='name' maxLength='20' />
            <input type="text"  placeholder={localStorage.getItem("language") == "en"? 'User Name':"Ազգանուն"} name='username' maxLength='20'/>
            <input type='tel' placeholder={localStorage.getItem("language") == "en"? 'Phone':"Հեռախոսահամար"} name='phone' maxLength='20' required/>
            <input type='email' placeholder={localStorage.getItem("language") == "en"? 'Email':"Էլ. Հասցե"} name='email' maxLength='20'/>
            <input type="submit" value={localStorage.getItem("language") == "en"? "Change":"Փոփոխել"} className='submitInput'/>
        </form>:null}
    </>
  )
}
