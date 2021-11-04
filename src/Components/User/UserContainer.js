import Card from '../UI/Card';
import styles from './UserContainer.module.css';
const UserContainer = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((users) => (
					<li key={users.id}>
						{users.name} ({users.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserContainer;
