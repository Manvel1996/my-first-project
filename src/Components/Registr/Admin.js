import React, { useEffect, useState } from 'react'
import AdminLog from './AdminLog'
import Registration from './Registration'
import Welcome from './Welcome'

export default function Admin({setLogined}) {
  const[login,setLogin] = useState(localStorage.getItem("login")?true:false)
  const[registr,setRegistr] = useState(()=>localStorage.getItem("reg")?true:false)

 useEffect(()=>{
   if(localStorage.getItem("userFireList") === null){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=>res.json())
     .then((data)=> localStorage.setItem("userFirstList",JSON.stringify([...data])))
    }
  },[]) 

  let pharm = {"sedative":[{"name":"Dimedrol","price":"$5","available":true,"count":441,"category":"sedative","image":"https://velpharm.ru/upload/iblock/580/Dimedrol-50-mg-_10_new.png"},{"name":"Donormil","price":"$42","available":true,"count":10,"category":"sedative","image":"https://www.mon-pharmacien-conseil.com/14408-large_default/donormyl-doxylamine-15mg-10-dry-film-coated-tablets.jpg"},{"name":"Nistatin","price":"$1905","available":true,"count":3,"category":"sedative","image":"https://www.tabletki.info/media/drugs/nistatin.png"}],"painkiller":[{"name":"Analgin","price":"$15","available":true,"count":41,"category":"painkiller","image":"https://295222.selcdn.ru/avexima.ru/iblock/626/626a75a87c3199121444b3b6a6f363c0/225eaab9c1b76ee02439ad02b6ceeb3c.png"},{"name":"Aspirin","price":"$25","available":true,"count":11,"category":"painkiller","image":"https://assets.apoly.de/medikamente-de-pzns/1000/03628124.png"},{"name":"Askofen","price":"$15","available":false,"count":0,"category":"painkiller","image":"https://otcpharm.ru/files/iblock/b21/askofen-ultra_p25_5.png"}],"cardio":[{"name":"Nitroglycerin","price":"$55","available":true,"count":90,"category":"cardio","image":"https://microkhim.com.ua/wp-content/uploads/nitroglitserin.png"},{"name":"Heparin","price":"$55","available":false,"count":0,"category":"cardio","image":"https://fadic.net/wp-content/uploads/2020/04/Unfractionated-Heparin.png"},{"name":"Warfarin","price":"$115","available":false,"count":0,"category":"cardio","image":"https://images.squarespace-cdn.com/content/v1/546e1217e4b093626abfbae7/1529513045970-3FP4HULSB39SK2Y8CN6R/Warfarin+Packet.png"}]}
 
  

  useEffect(()=>{
    if(localStorage.getItem("pharmAllList") == null){

      let pharmSedative = pharm.sedative.map(elem=>elem)
      let pharmPainkiller = pharm.painkiller.map(elem=> elem)
      let pharmCardio = pharm.cardio.map(el=>el)
      let pharmAll = [...pharmSedative,...pharmPainkiller,...pharmCardio]

      localStorage.setItem("pharmAllList",JSON.stringify(pharmAll))
    }
  })


  return (
    <div className='admin'>
      
      {login?<Welcome />:registr?<AdminLog  setRegistr={setRegistr} setLogin={setLogin} setLogined={setLogined}/>:<Registration setRegistr={setRegistr}/> }
    </div>
  )
}
