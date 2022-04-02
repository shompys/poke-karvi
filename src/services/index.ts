import { PokePageProps } from "types";

const getPokeUrls = (
    limit: number,
    offset: number,
): Promise<PokePageProps> => apiService(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
);

export const getPokemonById = async (id: number) => apiService(`https://pokeapi.co/api/v2/pokemon/${id}/`);

export const getPokemons = async (
    limit: number,
    offset: number
) => {

    const { results } = await getPokeUrls(limit, offset);

    return await Promise.all(results.map(async ({ url }) => apiService(url)))

}

export const getPokemonSpeciesId = (id: number) => apiService(`https://pokeapi.co/api/v2/pokemon/${id}/pokemon-species`);

const apiService = async (url: string, method = 'GET', payload = {}) => {

    type MethodsProps = {
        [index: string]: {
            method: string;
            headers: { 'Content-Type': string };
            body?: string;
        };
    }
    const methods: MethodsProps = {

        'GET': {
            method,
            headers: { 'Content-Type': 'application/json' },
        },

        'POST': {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        },

    }
    const options = methods ? methods[method] : methods['GET'];

    const res = await fetch(url, options)

    return await res.json()

}



