import React from 'react'

export default function AdminLog({setLogin,setRegistr,setLogined}) {

  function log(e){
    e.preventDefault()
    if(Array.from(new FormData(e.target))[0][1] === JSON.parse(localStorage.getItem("registr"))[0][1] && 
      Array.from(new FormData(e.target))[1][1] === JSON.parse(localStorage.getItem("registr"))[1][1]){
      setLogin(true)
      setLogined(true)
      localStorage.setItem("login","true")
    } else  alert(localStorage.getItem("language") == "en"? "False registr":"Սխալ մուտքանուն կամ գաղտնաբառ")
    
  }
 
  return (
    <div className='formLogin' >
        <form action='#' onSubmit={log}>
            <input type='text' placeholder={localStorage.getItem("language") == "en"?'Login':"Մուտքանուն"} name = 'login' required/>
            <input type='password' placeholder={localStorage.getItem("language") == "en"?'Password':"Գաղտնաբառ"} name='password' required/>
            <input type='submit' value={localStorage.getItem("language") == "en"?'Sign In':"Մուտք Գործել"} className='submitInput' />
        </form>
        <button onClick={()=>setRegistr(false)}>{localStorage.getItem("language") == "en"?'Sign Up':"Գրանցվել"}</button>
    </div>
  )
}
