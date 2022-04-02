
export const getPokemons = async () => {
    try {
        return await apiService("https://pokeapi.co/api/v2/pokemon/")
    } catch (error) {
        return Promise.reject({
            error,
        });
    }
};
export const getPokemonById = (id: number) => apiService(`https://pokeapi.co/api/v2/pokemon/${id}/`);
export const getPokemonSpeciesId = (id: number) => apiService(`https://pokeapi.co/api/v2/pokemon/${id}/pokemon-species`);

const apiService = async ( url: string, method = 'GET', payload = {} ) => {

    type MethodsProps = {
        [index: string]: {
            method: string;
            headers: { 'Content-Type': string};
            body?: string;
        };
    }
    const methods: MethodsProps = {

        'GET': {
            method,
            headers:{'Content-Type': 'application/json'},
        },

        'POST': {
            method,
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        },

    }
    const options = methods ? methods[method] : methods['GET'];

    const res = await fetch(url, options)
    
    return await res.json()
    
}



