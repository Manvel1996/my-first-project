import React, { useReducer } from 'react'
import {AiFillStar} from 'react-icons/ai'


function starFunc(state,action){
    if(action.type = 'raiting'){
        return {rate:action.payload}
    }
}


export default function Star() {
    const[star,setStar] = useReducer(starFunc,{rate:""})
    let starsArr =  Array(5).fill(<AiFillStar />)

    return (
    <section>
        {starsArr.map((elem,index)=>{
            return(
                <div key={Math.random()} onClick={()=>{
                    setStar({type:"raiting",payload:index});
                }} className={index <= star.rate?"rated":""}>
                    {elem}
                </div>
            )
        })}
    </section>
  )
}
