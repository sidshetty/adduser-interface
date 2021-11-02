import User from './User';
const UserContainer = (props) => {
	return <ul>{props.users.map((users) => <User key={users.id} age={users.age} name={users.name} />)}</ul>;
};

export default UserContainer;
