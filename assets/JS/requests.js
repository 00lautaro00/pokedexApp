

export const getPokemon = async (URL) => {
    const response = await fetch(URL)
        .then(res => res.json())
        .then(data => data)
        .catch(err => 'error')
        return response 
}

