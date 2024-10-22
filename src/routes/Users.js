import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuickButton from '../components/QuickButton';

const Users = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then(Response => {
			// console.log(Response.data);
			setUsers(Response.data);
		})
	},[])
	return (
		<div className='usersWrap'>
			<h1>Users</h1>
			<div className="usersCard">
				{
					users.map((user) => (
						<div className="card" key={user.id}>
							<div className="cardBady">
								<Link to={`/users/${user.id}`}>{user.name}</Link>
							</div>
						</div>
					))
				}
				<QuickButton />
			</div>
		</div>
	);
};

export default Users;