import React from 'react'

export default function Search({searched,setCard}) {

    function search(e){

        let searchPharm = JSON.parse(localStorage.getItem('pharmAllList'))
        searchPharm.map((elem)=>{
            if(elem.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return setCard({type:"search",payload:elem})
            }
        })
    }


    function handleCard(name,count,price){

        let firstLocal = JSON.parse(localStorage.getItem(`korzinaList${name}`))
        let counter = 1;
        let value = +price.slice(1);
    
        if(count == 0) alert("not available")
          
        else if(localStorage.getItem(`korzinaList${name}`) == null && count > 0){
          localStorage.setItem(`korzinaList${name}`,JSON.stringify({name:name,counter:counter,price:+price.slice(1)}))
          setCard({type:"available"})
          localStorage.setItem("key","value")
        }
        else if(count > firstLocal.counter){
            localStorage.setItem(`korzinaList${name}`,JSON.stringify({name:name,counter:firstLocal.counter+1,price:firstLocal.price+value}))
            setCard({type:"available"})
        }
        else if(count === firstLocal.counter) alert("is over")
      }





  return (
    <>
        <input type='search' placeholder='Search Name' className='search' onChange={search}/>
        {typeof searched == "object"?(<div className='poisk'>
            <div>{searched.name}</div>
            <div>{searched.price}</div>
            <div>{searched.count}</div>
            <div><img src={searched.image} /></div>
            <button onClick={()=>handleCard(searched.name,searched.count,searched.price)}>Card </button>
        </div>):null}
    </>
  )
}
