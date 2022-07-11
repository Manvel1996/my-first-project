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
        else if(count === firstLocal.counter) alert("is over")
      }





  return (
    <>
        <input type='search' placeholder={localStorage.getItem("language") == "en"? 'Search Pharmname':"Փնտրել Դեղանուն"} className='search' onChange={search}/>
        {typeof searched == "object"?(<div className='poisk'>
            <div>{searched.name}</div>
            <div>{searched.count}</div>
            <div>{localStorage.getItem("language") == "en"? `Price ${searched.price}`:`Գին ${searched.price.slice(1) * 480} Դր`}</div>
            <div><img src={searched.image} /></div>
            <button onClick={()=>handleCard(searched.name,searched.count,searched.price)}>{localStorage.getItem("language") == "en"? 'Card':"Ավելացնել զամբյուղում"} </button>
        </div>):null}
    </>
  )
}
