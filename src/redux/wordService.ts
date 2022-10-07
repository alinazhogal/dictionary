import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Word } from './types';

export const wordAPI = createApi({
	reducerPath: 'wordApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/' }),
	endpoints: (build) => ({
		fetchWord: build.query<Word[], string>({
			query: (value) => ({
				url: `${value}`,
			}),
		}),
	}),
});
