import React, { useState } from 'react';
import UserContainer from './Components/User/UserContainer';
import AddUserForm from './Components/User/AddUserForm';

const INITIAL_USERS = [];

function App() {
	const [ users, setUsers ] = useState(INITIAL_USERS);

	const onAddUser = (userInput) => {
		setUsers((prevUsers) => {
			return [ userInput, ...prevUsers ];
		});
	};

	return (
		<div>
			<AddUserForm addNewUser={onAddUser} />
			<UserContainer users={users} />
		</div>
	);
}

export default App;
