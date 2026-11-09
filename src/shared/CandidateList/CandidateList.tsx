import type { Show } from '../../types/show.types';
import Button from '../../base/Button/Button';
import './CandidateList.css';

type CandidateListProps = {
	candidates: Show[];
	hasStarted: boolean;
	onRemove: (id: number) => void;
	onStart: () => void;
};

function CandidateList({
	candidates,
	hasStarted,
	onRemove,
	onStart,
}: CandidateListProps) {
	return (
		<section className='candidates' aria-labelledby='candidates-title'>
			<h2 id='candidates-title' className='candidates__title'>
				Era kandidater ({candidates.length})
			</h2>

			<ul className='candidates__list'>
				{candidates.map((candidate) => (
					<li className='candidates__item' key={candidate.id}>
						<span>{candidate.name}</span>
						<Button
							className='candidates__remove'
							type='button'
							aria-label={`Ta bort ${candidate.name}`}
							onClick={() => onRemove(candidate.id)}>
							Ta bort
						</Button>
					</li>
				))}
			</ul>

			{candidates.length === 1 && (
				<p className='candidates__empty' role='status'>
					Lägg till minst en serie till för att starta omgången.
				</p>
			)}

			{!hasStarted && (
				<Button
					className='candidates__start'
					type='button'
					disabled={candidates.length < 2}
					onClick={onStart}>
					Starta omgång
				</Button>
			)}
		</section>
	);
}

export default CandidateList;
