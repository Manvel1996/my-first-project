import React from 'react'

export default function AdminLog({setLogin,setRegistr,setLogined}) {

  function log(e){
    e.preventDefault()
    if(Array.from(new FormData(e.target))[0][1] === JSON.parse(localStorage.getItem("registr"))[0][1] && 
      Array.from(new FormData(e.target))[1][1] === JSON.parse(localStorage.getItem("registr"))[1][1]){
      setLogin(true)
      setLogined(true)
      localStorage.setItem("login","true")
    } else  alert("False registr")
    
  }
 
  return (
    <div className='formLogin' >
        <form action='#' onSubmit={log}>
            <input type='text' placeholder='Login' name = 'login'/>
            <input type='password' placeholder='Password' name='password'/>
            <input type='submit' value='Login' className='submitInput'/>
        </form>
        <button onClick={()=>setRegistr(false)}>Registr</button>
    </div>
  )
}
