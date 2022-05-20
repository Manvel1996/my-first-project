import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'

export default function Star() {
    const[rate,setRate] = useState()
    let starArr = Array(5).fill(<AiFillStar />)
  return (
    <section>
        {starArr.map((elem,index)=>{
            return(
                <div onClick={()=>setRate(index)} className={index <= rate ?  "rated" :""} key={Math.random()}>{elem}</div>
            )
        })}
    </section>
  )
}
