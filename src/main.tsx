import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchInterval: 1000 * 60 * 60, // revalidate
			staleTime: Infinity, // data fresh
			cacheTime: 1000 * 60 * 5,// inactive data
			retry: false // en caso de error no reintentar
		}
	}
});

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<App />
			<ReactQueryDevtools />
		</React.StrictMode>
	</QueryClientProvider>,
	document.getElementById('root')
);
