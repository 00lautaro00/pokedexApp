import { getPokemon } from "./requests.js";
console.log('2')


const URL = `https://pokeapi.co/api/v2/pokemon/1`

const viewPokemon = document.getElementById("picture");
const stats = document.getElementById('stats')
const cardStats = `<strong>Name:</strong> Psyduck<br/>
<strong>Type:</strong> Water<br/>
<strong>Height:</strong> 2'072''<br/>
<strong>Weight:</strong> 43.2 lbs.<br/><br/>
<strong>The duck Pokemon</strong><br/>`

// const cardPokemon = `<img src="${urlPoke}" height="170" />`

const renderPokemon = async () => {
    const poke = await getPokemon(URL)
    const [type1, type2] = poke.types
    viewPokemon.innerHTML = `<img src="${poke.sprites.front_default}" height="240" />`

    stats.innerHTML = ` <strong>Name:</strong>${poke.name}<br/>
                        <strong>Type:</strong> ${type1.type.name},  ${type2.type.name}<br/>
                        <strong>Height:</strong> ${poke.height}''<br/>
                        <strong>Weight:</strong> ${poke.weight}<br/><br/>
                       `
}
renderPokemon()