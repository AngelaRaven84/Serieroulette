import { useState, type SubmitEvent } from 'react';
import type { Show } from '../../types/show.types';
import { useShowSearch } from '../../core/hooks/useShowSearch';
import ShowCard from '../../components/ShowCard/ShowCard';
import Button from '../../base/Button/Button';
import './ShowSearch.css';

type ShowSearchProps = {
	candidates: Show[];
	onAdd: (show: Show) => void;
};

function ShowSearch({ candidates, onAdd }: ShowSearchProps) {
	const [query, setQuery] = useState<string>('');
	const [submittedQuery, setSubmittedQuery] = useState<string>('');
	const {
		data: results = [],
		isFetching: isLoading,
		isError,
		isPaused,
		refetch,
	} = useShowSearch(submittedQuery);

	function handleSearch(event: SubmitEvent<HTMLFormElement>): void {
		event.preventDefault();

		const searchQuery = query.trim();
		if (!searchQuery || isLoading) return;

		if (searchQuery === submittedQuery) {
			void refetch();
		} else {
			setSubmittedQuery(searchQuery);
		}
	}

	return (
		<section className='search' aria-labelledby='search-title'>
			<h2 className='search__title' id='search-title'>
				Hitta era kandidater
			</h2>
			<p className='search__description'>
				Sök efter serier att lägga till i er omgång
			</p>

			<form className='search__form' onSubmit={handleSearch}>
				<label htmlFor='series-query' className='search__label'>
					Seriens namn
				</label>

				<input
					type='search'
					id='series-query'
					name='query'
					placeholder='Till exempel Friends'
					className='search__input'
					value={query}
					onChange={(event) => setQuery(event.currentTarget.value)}
				/>

				<Button className='search__button' type='submit' disabled={isLoading}>
					{isLoading ? 'Söker...' : 'Sök'}
				</Button>
			</form>

			{isPaused && (
				<p className='search__status' role='status'>
					Sökningen väntar på nätverksanslutning.
				</p>
			)}

			{isError && (
				<p className='search__error' role='alert'>
					Kunde inte hämta serier. Försök igen.
				</p>
			)}

			{submittedQuery &&
				!isLoading &&
				!isPaused &&
				!isError &&
				results.length === 0 && (
					<p className='search__empty' role='status'>
						Inga serier hittades för ”{submittedQuery}”. Prova ett annat namn.
					</p>
				)}

			{candidates.length === 0 && (
				<p className='candidates__empty'>
					Sök efter serier och lägg till minst två kandidater. Sedan turas ni om
					att välja bort tills en serie återstår.
				</p>
			)}

			<ul className='search__results'>
				{results.map((result) => (
					<li className='search__result' key={result.show.id}>
						<ShowCard
							show={result.show}
							onAdd={onAdd}
							isAdded={candidates.some(
								(candidate) => candidate.id === result.show.id,
							)}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

export default ShowSearch;
