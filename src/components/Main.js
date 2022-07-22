import React,{useState,useEffect, useCallback} from 'react'
import axios from "axios"
import Pokemons from "./Pokemons"
import Properties from "./Properties"
function Main() {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(false);
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100"

    const getPokemon=useCallback(async(res)=>{
        try {
            setLoading(true)
            const allPokemon = await axios.get(url);
            const pokemonData = await Promise.all(allPokemon.data.results.map(async pokemon => {
              const pokemonRecord = await axios.get(pokemon.url);
              return pokemonRecord.data;
            }));
            setPokeData(pokemonData)
            setLoading(false)
          } catch (err) {
            console.log(err);
          }
    },[pokeData])
    
    useEffect(()=>{
        getPokemon();
    },[url])

  return (
    <div>
        <h1 className='title'>POKEMON</h1>
        <Pokemons pokemons={pokeData} loading={loading} />
         <Properties/>
    </div>
  )
}

export default Main