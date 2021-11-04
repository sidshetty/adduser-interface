import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
	const error = 'abc';
	return (
		<div>
			<div className={classes.backdrop} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button>Close</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
