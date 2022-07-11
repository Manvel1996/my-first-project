import React from 'react'

export default function Registration({setRegistr}) {

    
  function reg (e){
    e.preventDefault()
    if(Array.from(new FormData(e.target))[0][1].length >= 4 && Array.from(new FormData(e.target))[1][1].length >= 4){
        if(Array.from(new FormData(e.target))[1][1] === Array.from(new FormData(e.target))[2][1]){
            setRegistr(true)
            localStorage.setItem("registr",JSON.stringify(Array.from(new FormData(e.target))))
        }else alert(localStorage.getItem("language") == "en"? "Please repeat same password":"Խնդրում եմ կրկնեք նույն գաղտնաբառը")
    }else alert(localStorage.getItem("language") == "en"? "login and password longer than 4 letters":"Մուտքանունը և գաղտնաբառը պետք է պարունակեն ամենաքիչը 4 նշան")
  }


  return (
      
    <div className='formRegistr'>
        <form action='#' onSubmit={reg}>
            <input type='text' placeholder={localStorage.getItem("language") == "en"?'Login':"Մուտքանուն"} name = 'login' required/>
            <input type='password' placeholder={localStorage.getItem("language") == "en"?'Password':"Գաղտնաբառ"} name='password' required/>
            <input type='password' placeholder={localStorage.getItem("language") == "en"?'Repeat Password':"Կրկնել Գաղտնաբառը"} name='password' required/>
            <input type='submit' value={localStorage.getItem("language") == "en"?'Sign Up':"Գրանցվել"} className='submitInput'/>
        </form>
        <button onClick={()=>setRegistr(true)}>{localStorage.getItem("language") == "en"?'Continue':"Շարունակել"}</button>
    </div>
  )
}
