import React from 'react'

export default function Welcome() {
  return (
    <div className='welcomeDiv'>
        {localStorage.getItem("language") == "en"?<img src={'https://pngimg.com/uploads/welcome/welcome_PNG76.png'}/>:<img src={'https://upload.wikimedia.org/wikipedia/commons/d/d0/Bari_galust.png'}/>}
        {localStorage.getItem("language") == "en"?<h1>Please click <b >Tel book</b> link or <b>Pharmacy</b> link above</h1>:<h1>Խնդրում եմ սեղմեք <b >Հեռախոսագիրք</b> լինքին կամ <b>Դեղատուն</b> լինքին վերևում</h1>}
    </div>
  )
}
