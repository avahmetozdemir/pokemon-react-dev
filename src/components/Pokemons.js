import React from 'react'
import Pokemon from "./Pokemon"

function Pokemons({pokemons,loading}) {


  return (<div className='content'>
   {loading ? <h1>loading...</h1> : (pokemons.map((item)=> {
      return (
        <Pokemon item={item} key={item.id}  />
      )
   })) }
  </div> )
}

export default Pokemons