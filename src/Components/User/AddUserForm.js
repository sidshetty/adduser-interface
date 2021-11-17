import { useState, useRef } from 'react';
import Card from '../UI/Card';
import styles from './AddUserForm.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUserForm = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');
	const [ error, setError ] = useState();

	const nameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const enteredNameValue = nameInputRef.current.value;
		const enteredAgeValue = ageInputRef.current.value;
		if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0) {
			setError({
				message: 'Please enter a valid name and age (non empty values).',
				title: 'Invalid Input'
			});

			return;
		}
		if (+enteredAgeValue < 1) {
			setError({
				message: 'Please enter a valid age( > 0).',
				title: 'Invalid Input'
			});

			return;
		}

		const userData = {
			id: Math.floor(1000 + Math.random() * 9000),
			name: enteredNameValue,
			age: enteredAgeValue
		};
		props.addNewUser(userData);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const resetError = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && <ErrorModal onClose={resetError} title={error.title} message={error.message} />}

			<Card className={styles.input}>
				<form onSubmit={onSubmitHandler}>
					<label>name</label>
					<input type="text" onChange={nameChangeHandler} ref={nameInputRef} />
					<label>Age</label>
					<input type="number" onChange={ageChangeHandler} ref={ageInputRef} />
					<Button type="submit" value="Submit">
						Add User
					</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUserForm;
