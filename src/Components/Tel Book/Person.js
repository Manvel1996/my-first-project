import Edit from './Edit'
import Info from './Info'
import Remove from './Remove'

export default function Person() {
  
  return (
      <>
        {localStorage.getItem("userList")? JSON.parse(localStorage.getItem("userList")).map((elem,index)=>{
          return( 
              <>
                <div className='tableContent'>{elem.name}</div>
                <div className='tableContent' id='userNameDiv'>{elem.username}</div>
                <div className='tableContent' id='phoneDiv'>{elem.phone}</div>
                <div className='tableContent' id='emailDiv'>{elem.email}</div>
                <div className='editDelete'><Edit index={index} /><Remove phone={elem.phone}/></div>
                <div className='infoContent'><Info elem={elem} index={index}/></div>
              </>
          )
        }):null}
      </>
  )
}
