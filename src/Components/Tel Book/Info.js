import React, { useState } from 'react'
import {AiFillInfoCircle} from 'react-icons/ai'

export default function Info({elem,index}) {
    const[info,setinfo] = useState(false)


  return (
    <div key={Math.random()} onClick={()=>setinfo(!info)}>
        <AiFillInfoCircle />
        {info?
        <div key={Math.random()} className='infoDiv'>
            <div>{index+1}</div>
            <div>{elem.name}</div>
            <div>{elem.username}</div>
            <div>{elem.phone}</div>
            <div>{elem.email}</div>
            <div>Date Registr London GMT <br/>{elem.myDate}</div>
        </div>:null}
    </div>
  )
}
