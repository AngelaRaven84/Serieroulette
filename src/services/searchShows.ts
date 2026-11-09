import type { ShowSearchResult } from '../types/show.types';

export async function searchShows(query: string): Promise<ShowSearchResult[]> {
	const params = new URLSearchParams({ q: query });
	const response = await fetch(`https://api.tvmaze.com/search/shows?${params}`);

	if (!response.ok) {
		throw new Error('Kunder inte hämta serier.');
	}

	const data: ShowSearchResult[] = await response.json();

	return data;
}
