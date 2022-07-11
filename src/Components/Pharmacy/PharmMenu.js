import React from 'react'
import Star from './Star';

export default function PharmMenu({setCard}) {
  
  function handleKorzina(name,count,price){

    let firstLocal = JSON.parse(localStorage.getItem(`korzinaList${name}`))
    let counter = 1;
    let value = +price.slice(1);

    if(count == 0) alert(localStorage.getItem("language") == "en"? "not available":"Քանակ չկա")
      
    else if(localStorage.getItem(`korzinaList${name}`) == null && count > 0){
      localStorage.setItem(`korzinaList${name}`,JSON.stringify({name:name,counter:counter,price:+price.slice(1)}))
      setCard({type:"available"})
      localStorage.setItem("key","value")
    }
    else if(count > firstLocal.counter){
        localStorage.setItem(`korzinaList${name}`,JSON.stringify({name:name,counter:firstLocal.counter+1,price:firstLocal.price+value}))
        setCard({type:"available"})
    }
    else if(count === firstLocal.counter) alert(localStorage.getItem("language") == "en"? "is over":"Քանակը վերջացավ")
  }
  return (
    <>
        {JSON.parse(localStorage.getItem("pharmAllList")).map((elem)=>{
            return (
                <div className='sortDiv' key={Math.random()}>
                    <h2>{elem.name}</h2>
                    <div><img src={elem.image}/></div>
                    <p>{localStorage.getItem("language") == "en"? `Count `:`Քանակ`} {elem.count} </p>
                    <p>{localStorage.getItem("language") == "en"? `Price ${elem.price}`:`Գին ${elem.price.slice(1) * 480} Դր`} </p>
                    <Star />
                    <button onClick={()=>handleKorzina(elem.name,elem.count,elem.price)}>{localStorage.getItem("language") == "en"? `Card ${elem.name}`:"Ավելացնել զամբյուղում"} </button>
                </div>
            )
        })} 
    </>
  )
}
