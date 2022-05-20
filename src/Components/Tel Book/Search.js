import React, { useState } from 'react'

export function Search() {
   const[poisk,setPoisk] = useState([])
  
    function search(e){
      JSON.parse(localStorage.getItem('userList')).map((elem)=>{
        if(elem.name.toLowerCase().includes(e.target.value.toLowerCase())){
          return setPoisk(elem)
        }
      })
    }  
  return (
    <>
      <input type='search' placeholder='search name' onChange={search}/>
      <div className='poisk'><div>{poisk.name}</div><div>{poisk.username}</div><div>{poisk.phone}</div><div>{poisk.email}</div></div>
    </>
  )
}

