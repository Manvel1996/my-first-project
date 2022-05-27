import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"



export default function Korzina({colorum,infoCart,setCard}) {

  let fullCard = [];
  for(let key in localStorage){
    if(key.slice(0,7) == "korzina"){
     fullCard.push(JSON.parse(localStorage.getItem(key)))
    }
  }

  function buy(){
    if(fullCard.length > 0){
      let newPharmAllList = JSON.parse(localStorage.getItem("pharmAllList"))
      localStorage.removeItem("pharmAllList")
      let listPharm = []
      for(let i = 0;i < newPharmAllList.length;i++){
        for(let j = 0;j < fullCard.length;j++){
          if(newPharmAllList[i].name == fullCard[j].name ){
            listPharm.push({name:newPharmAllList[i].name,price:newPharmAllList[i].price,count:newPharmAllList[i].count-fullCard[j].counter,image:newPharmAllList[i].image}) 
            break
          }
          else if(j == fullCard.length - 1){
            listPharm.push({name:newPharmAllList[i].name,price:newPharmAllList[i].price,count:newPharmAllList[i].count,image:newPharmAllList[i].image})
          }
        }
      } 
      for(let k of fullCard){
        localStorage.removeItem(`korzinaList${k.name}`)
        setCard({type:"buy"})
      }
      localStorage.setItem("pharmAllList",JSON.stringify(listPharm))
      setCard({type:"buy"})
      console.log(listPharm)
      localStorage.removeItem("key")
    }
  }

  function remove(elem){
    localStorage.removeItem(`korzinaList${elem}`);
    setCard({type:"info"})
    if(fullCard.length == 1){localStorage.removeItem("key")}
  }
  
  return (
    <div  className='infoDivKorzina'>
        <AiOutlineShoppingCart className={colorum?"cardFull":"empty"} onClick={()=>setCard({type:'info'})}/>
        {infoCart?<div>{fullCard.map((elem)=>{
          return(
            <div key={Math.random()}>
              <h3>{elem.name}</h3> 
              <p>{elem.counter}</p>
              <p>{elem.price} $</p>
              <button onClick={()=> remove(elem.name)}>Delete</button>
            </div>
          )})}
          <button onClick={()=>buy()} className='buyKorzinaButton'> Buy</button>
        </div>:null}
    </div>
  )
}
