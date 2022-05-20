import React from 'react'

export default function Registration({setRegistr}) {

    
  function reg (e){
    e.preventDefault()
    if(Array.from(new FormData(e.target))[0][1].length >= 4 && Array.from(new FormData(e.target))[1][1].length >= 4){
        if(Array.from(new FormData(e.target))[1][1] === Array.from(new FormData(e.target))[2][1]){
            setRegistr(true)
            localStorage.setItem("registr",JSON.stringify(Array.from(new FormData(e.target))))
        }else alert("Please repeat same password")
    }else alert("login and password longer than 4 letters")
  }


  return (
      
    <div className='formRegistr'>
        <form action='#' onSubmit={reg}>
            <input type='text' placeholder='Login' name = 'login'/>
            <input type='password' placeholder='Password' name='password'/>
            <input type='password' placeholder='Repeat Password' name='password'/>
            <input type='submit' value='Registr' className='submitInput'/>
        </form>
        <button onClick={()=>setRegistr(true)}>Continue</button>
    </div>
  )
}
