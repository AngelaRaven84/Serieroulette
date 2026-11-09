import type { Show } from '../../types/show.types';
import Button from '../../base/Button/Button';
import './ShowCard.css';

type ShowCardProps = {
	show: Show;
	onAdd: (show: Show) => void;
	isAdded: boolean;
};

function ShowCard({ show, onAdd, isAdded }: ShowCardProps) {
	return (
		<article className='show-card'>
			{show.image ? (
				<img src={show.image.medium} alt='' className='show-card__image' />
			) : (
				<p className='show-card__placeholder'>Bild saknas</p>
			)}
			<h3 className='show-card__title'>{show.name}</h3>

			<Button
				className='show-card__button'
				type='button'
				onClick={() => onAdd(show)}>
				{isAdded ? 'Tillagd' : 'Lägg till kandidat'}
			</Button>
		</article>
	);
}

export default ShowCard;
