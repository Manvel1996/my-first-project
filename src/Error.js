import React from 'react'

export default function Error() {
  return (
    <div className='errorDiv'>
      <img className='image404' src={'https://hirebee-main-new.s3.amazonaws.com/staff.am/images/background/404.png'}/>
      <img className='imageRobot' src={'https://hirebee-main-new.s3.amazonaws.com/staff.am/images/background/robby-404.png'}/>
      {localStorage.getItem("language") == "en"?<h1>I have looked everywhere, it`s gone</h1>: <h1>Ամեն տեղ ման եմ եկել, չկա </h1>}
    </div>
  )
}
