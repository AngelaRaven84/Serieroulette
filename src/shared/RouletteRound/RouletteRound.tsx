import type { Show } from '../../types/show.types';
import Button from '../../base/Button/Button';
import './RouletteRound.css';

type RouletteRoundProps = {
	remainingShows: Show[];
	currentPlayer: 1 | 2;
	onEliminate: (id: number) => void;
	onRestart: () => void;
	onEditCandidates: () => void;
};

function RouletteRound({
	remainingShows,
	currentPlayer,
	onEliminate,
	onRestart,
	onEditCandidates,
}: RouletteRoundProps) {
	return (
		<section className='round' aria-labelledby='round-title'>
			<h2 className='round__title' id='round-title'>
				Omgång
			</h2>

			{remainingShows.length > 1 && (
				<p className='round__turn' role='status'>
					Spelare {currentPlayer}, välj bort en serie.
				</p>
			)}

			{remainingShows.length === 1 && (
				<div className='round__winner' role='status'>
					<p>Ikväll ser ni</p>
					<h3>{remainingShows[0].name}</h3>

					{remainingShows[0].image && (
						<img
							src={remainingShows[0].image.medium}
							alt=''
							className='round__winner-image'
						/>
					)}

					<Button className='round__restart' type='button' onClick={onRestart}>
						Spela igen med samma kandidater
					</Button>

					<Button
						className='round__edit'
						type='button'
						onClick={onEditCandidates}>
						Ändra kandidater
					</Button>
				</div>
			)}

			{remainingShows.length > 1 && (
				<ul className='round__list'>
					{remainingShows.map((show) => (
						<li className='round__item' key={show.id}>
							<span>{show.name}</span>
							<Button
								className='round__eliminate'
								type='button'
								disabled={remainingShows.length <= 1}
								aria-label={`Välj bort ${show.name}`}
								onClick={() => onEliminate(show.id)}>
								Välj bort
							</Button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

export default RouletteRound;
