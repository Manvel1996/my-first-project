import Edit from './Edit'
import Info from './Info'
import Remove from './Remove'
import Star from './Star'

export default function Person({text,setText}) {
  
  
  return (
      <>
        {localStorage.getItem("userList")? JSON.parse(localStorage.getItem("userList")).map((elem,index)=>{
          return( 
              <>
                <div className='tableContent'>{elem.name}</div>
                <div className='tableContent' id='userNameDiv'>{elem.username}</div>
                <div className='tableContent' id='phoneDiv'>{elem.phone}</div>
                <div className='tableContent' id='emailDiv'>{elem.email}</div>
                <div className='star'><Star/></div>
                <div className='editDelete'><Edit index={index} setText={setText} text={text}/><Remove setText={setText} text={text} phone={elem.phone}/></div>
                <div className='infoContent'><Info elem={elem} index={index}/></div>
              </>
          )
        }):null}
      </>
  )
}
