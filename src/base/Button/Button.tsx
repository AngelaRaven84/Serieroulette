import type { ComponentProps } from 'react';
import './Button.css';

type ButtonProps = ComponentProps<'button'>;

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={['button', className].filter(Boolean).join(' ')}>
			{children}
		</button>
	);
}

export default Button;
