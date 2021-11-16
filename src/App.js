import React, { useState, Fragment } from 'react';
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
		<Fragment>
			{/* can use React.Fragment instead without importing fragment from react */}
			<AddUserForm addNewUser={onAddUser} />
			<UserContainer users={users} />
		</Fragment>
	);
}

export default App;
