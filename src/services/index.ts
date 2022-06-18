import { PokePageProps } from '@/types';

const getPokeUrls = (
	limit: number,
	offset: number,
): Promise<PokePageProps> => apiService(
	`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
);

export const getPokemonById = async (id?: string) => apiService(`https://pokeapi.co/api/v2/pokemon/${id}/`);

export const getEvolutions = async (url: string) => apiService(url);

export const getPokemons = async (
	limit: number,
	offset: number
) => {
    
	const { results } = await getPokeUrls(limit, offset);
	return await Promise.all(results.map(async ({ url }) => apiService(url)));
};

export const getPokemonSpecie = (url: string) => apiService(url);

const apiService = async (url: string, method = 'GET') => {

    type MethodsProps = {
        [index: string]: {
            method: string;
            headers: { 
                'Content-Type': string; 
                'Access-Control-Allow-Origin': string;
            };
            body?: string;
        };
    }
    const methods: MethodsProps = {
	
    	'GET': {
    		method,
    		headers: {
    			'Content-Type': 'application/json',
    			'Access-Control-Allow-Origin': '*',
    		},
    	},
    	
    };

    const options = methods[method] ? methods[method] : methods['GET'];

    const res = await fetch(url, options);

    return await res.json();

};



