import { useState } from 'react';
import type { Show } from '../../types/show.types';

export function useRoulette() {
	const [candidates, setCandidates] = useState<Show[]>([]);
	const [remainingShows, setRemainingShows] = useState<Show[]>([]);
	const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);

	function handleAddCandidate(show: Show): void {
		setCandidates((previous) => {
			const alreadyAdded = previous.some(
				(candidate) => candidate.id === show.id,
			);

			if (alreadyAdded) return previous;

			return [...previous, show];
		});
	}

	function handleRemoveCandidate(id: number): void {
		setCandidates((previous) =>
			previous.filter((candidate) => candidate.id !== id),
		);
	}

	function handleStartRound(): void {
		if (candidates.length < 2) return;

		setRemainingShows([...candidates]);
		setCurrentPlayer(1);
	}

	function handleEliminateShow(id: number): void {
		if (remainingShows.length <= 1) return;
		if (!remainingShows.some((show) => show.id === id)) return;

		setRemainingShows((previous) => previous.filter((show) => show.id !== id));

		setCurrentPlayer((previous) => (previous === 1 ? 2 : 1));
	}

	function handleEditCandidates(): void {
		setRemainingShows([]);
		setCurrentPlayer(1);
	}

	return {
		candidates,
		handleAddCandidate,
		handleRemoveCandidate,
		remainingShows,
		handleStartRound,
		handleEliminateShow,
		currentPlayer,
		handleEditCandidates,
	};
}
