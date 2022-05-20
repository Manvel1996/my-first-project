import React from 'react'

export default function Remove({phone,text,setText}) {

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
        <button onClick={deleteItem}>Delete</button>
    </>
  )
}
