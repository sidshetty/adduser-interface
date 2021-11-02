import { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUserForm.module.css';
import Button from '../UI/Button';

const AddUserForm = (props) => {
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');

	const nameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (age.trim().length === 0 || name.trim().length === 0) {
			console.log('Please enter a valid name and age (non empty values).');
			return;
		}
		if (+age < 1) {
			console.log('Please enter a valid age( > 0).');
			return;
		}

		const userData = {
			id: Math.floor(1000 + Math.random() * 9000),
			name: name,
			age: age
		};
		props.addNewUser(userData);
		setName('');
		setAge('');
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={onSubmitHandler}>
				<label>name</label>
				<input type="text" value={name} onChange={nameChangeHandler} />
				<label>Age</label>
				<input type="number" value={age} onChange={ageChangeHandler} />
				<Button type="submit" value="Submit">
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUserForm;
