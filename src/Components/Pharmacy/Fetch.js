import React, { useReducer } from 'react'
import './App.scss'
import Korzina from './Korzina'
import PharmMenu from './PharmMenu'
import Search from './Search'


function cardFunc(state,action){
    if(action.type == "available"){
      return {colorCard: true}
    }
    else if(action.type == "info"){
      return {infoCart:!state.infoCart,colorCard:!state.colorCard}
    }
    else if(action.type == "search"){
      return{searched:action.payload}
    }else if(action.type == "buy"){
      return {buy: state.buy + 1}
    }
}


export default function Fetch() {
  const [card,setCard] = useReducer(cardFunc,
    {
      colorCard:localStorage.getItem("key")?true:false,
      infoCart:false,
      searched:1,
      buy:0,
    })
    


    
  return (
    <div className='navDiv'>
      <Search searched={card.searched} setCard={setCard} />
      <div className='mainDiv'>
        <PharmMenu setCard={setCard} />
      </div>
      <Korzina colorum={card.colorCard} infoCart={card.infoCart}  setCard={setCard} />
    </div>
  )
}
