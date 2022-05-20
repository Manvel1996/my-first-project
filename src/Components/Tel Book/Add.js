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
            <input type="text" placeholder='Name' name='name' maxLength='20'/>
            <input type="text"  placeholder='User Name' name='username' maxLength='20'/>
            <input type='tel' placeholder='Phone' name='phone' required maxLength='20'/>
            <input type='email' placeholder='Email' name='email' maxLength='20'/>
            <input type="submit" value="Add" className='submitInput'/>
        </form>
    </>
  )
}
