import { useRoulette } from './core/hooks/useRoulette';
import CandidateList from './shared/CandidateList/CandidateList';
import RouletteRound from './shared/RouletteRound/RouletteRound';
import ShowSearch from './shared/ShowSearch/ShowSearch';
import './App.css';

function App() {
	const {
		candidates,
		handleAddCandidate,
		handleRemoveCandidate,
		remainingShows,
		handleStartRound,
		handleEliminateShow,
		currentPlayer,
		handleEditCandidates,
	} = useRoulette();

	return (
		<div className='app'>
			<header className='app__header'>
				<h1 className='app__title'>Serieroulette</h1>
				<p className='app__description'>Hitta serien ni vill se tillsammans</p>
			</header>

			<main className='app__main'>
				{remainingShows.length === 0 && (
					<>
						<ShowSearch candidates={candidates} onAdd={handleAddCandidate} />

						<CandidateList
							candidates={candidates}
							hasStarted={remainingShows.length > 0}
							onRemove={handleRemoveCandidate}
							onStart={handleStartRound}
						/>
					</>
				)}

				{remainingShows.length > 0 && (
					<RouletteRound
						remainingShows={remainingShows}
						currentPlayer={currentPlayer}
						onEliminate={handleEliminateShow}
						onRestart={handleStartRound}
						onEditCandidates={handleEditCandidates}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
