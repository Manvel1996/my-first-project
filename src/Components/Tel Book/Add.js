import React from 'react'

export default function Add({setCreate}) {

    function newElem(e){
        e.preventDefault()
        const newCreate = Array.from(new FormData(e.target))
        let obj = new Object
        obj.id = JSON.parse(localStorage.getItem("userList")).length + 1
        obj.name = newCreate[0][1]
        obj.username = newCreate[1][1]
        obj.phone = newCreate[2][1]
        obj.email = newCreate[3][1]
        obj.myDate = new Date
        
        let arr = [...JSON.parse(localStorage.getItem("userList")),obj]
        
        localStorage.setItem("userList",JSON.stringify(arr))
        setCreate(false)
        obj={}
    }
  return (
    <>
        <form action="#" onSubmit={newElem} className='createForm'>
            <input type="text" placeholder={localStorage.getItem("language") == "en"? 'Name':"Անուն"} name='name' maxLength='20'/>
            <input type="text"  placeholder={localStorage.getItem("language") == "en"? 'User Name':"Ազգանուն"} name='username' maxLength='20'/>
            <input type='tel' placeholder={localStorage.getItem("language") == "en"? 'Phone':"Հեռախոսահամար"} name='phone' required maxLength='20'/>
            <input type='email' placeholder={localStorage.getItem("language") == "en"? 'Email':"Էլ. Հասցե"} name='email' maxLength='20'/>
            <input type="submit" value={localStorage.getItem("language") == "en"? "Add":"Ավելացնել"} className='submitInput'/>
        </form>
    </>
  )
}
