import React, { useEffect, useState } from 'react'
import './main.css'

const Main = () => {

  const [pokedex, setPokedex] = useState([])
  const[ loading, setLoading] = useState(true)
  
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  }
  
  useEffect(() =>{
    async function loadFilmes() {
      const pokemon = []
      
      for(let id = 1; id <= 150; id++) {
        const url = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
        
        pokemon.push((url))
      }
      setPokedex(pokemon)
      setLoading(false)
    }
    loadFilmes() 
  }, [])
  
    if(loading) {
    return (
    <div className='loading'>
      <h2>Carregando pokedex...</h2>
    </div>
    )
  }
  
  return (
    <main className='container'>

      {pokedex.map((item, index) =>{
        return(
            <div key={item}  
            style={{background: colors[item.types[0].type.name]}} 
            className='pokemons'>
              <div className='poke'></div>
              <img  src={item.sprites.front_default} alt='pokemons'/>
              <p className='id'>#{index + 1}</p>
              <p><strong>{item.name.toUpperCase()}</strong></p>
              <p className='type'>Type: {item.types[0].type.name}</p>
            </div>
        )
      })}
      
    </main>
  )
}

export default Main
