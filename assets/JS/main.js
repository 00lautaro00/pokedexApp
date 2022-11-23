import { getPokemon } from "./requests.js";


const URL = `https://pokeapi.co/api/v2/pokemon/`

const viewPokemon = document.getElementById("picture");
const stats = document.getElementById('stats')
const form = document.querySelector("form");

const renderPokemon = async (pokemonID) => {
    const poke = await getPokemon(`${URL}${pokemonID}`)
    if(poke === 'error'){
        viewPokemon.innerHTML = 
        `
        <h2> Pokemon not Found </h2>
        `

    }else{
       
    viewPokemon.innerHTML = `<img src="${poke.sprites.front_default}" height="200" />`
    stats.innerHTML = ` <strong>Name:</strong>${poke.name}<br/>
                        <strong>Type:</strong> ${poke.types.map(type => type.type.name)}<br/>
                        <strong>Height:</strong> ${poke.height}''<br/>
                        <strong>Weight:</strong> ${poke.weight}<br/><br/>
                       `
    }
    
}

const init = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        renderPokemon(parseInt(e.target[0].value))
        e.target[0].value=''
        })}
init()