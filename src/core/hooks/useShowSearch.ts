import { useQuery } from '@tanstack/react-query';
import { searchShows } from '../../services/searchShows';

export function useShowSearch(query: string) {
	return useQuery({
		queryKey: ['shows', query],
		queryFn: () => searchShows(query),
		enabled: query.length > 0,
		retry: false,
	});
}
