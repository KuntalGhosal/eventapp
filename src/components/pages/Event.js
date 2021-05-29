import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Event = () => {
	const [info, setInfo] = useState('');
	useEffect(() => {
		loadEvent();
	}, []);

	const loadEvent = async () => {
		// e.preventDefault();
		const config = {
			method: 'GET',
			url: 'https://ik-react-task.herokuapp.com/events/',
			headers: {
				// 'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5OTUsInVzZXJuYW1lIjoiaGlyYUBnbWFpbC5jb20iLCJleHAiOjE2MjI4OTg4NTIsImVtYWlsIjoiaGlyYUBnbWFpbC5jb20ifQ.xAtzXAsi0Vsh46BWnzAadgArdT-ob65Lzd7iWT9xWZ0 ',
			},
		};
		const res = await axios(config);
		// const res = await fetch(
		// 	'https://ik-react-task.herokuapp.com/events/event_types/'
		// );
		// const data = await res.json();
		console.log(res.data);
		// const [data] = res.data;
		// console.log(data);
		setInfo({ info: res.data });
		// const info = res.data;
		// setUser(data);
	};
	return (
		<div className='container'>
			<div className='py-4'>
				<h1></h1>
				<table class='table border shadow'>
					<thead class='thead-dark'>
						<tr>
							<th scope='col'>SNO.</th>
							<th scope='col'>Name</th>
							<th scope='col'>EventType</th>
							<th scope='col'>Start</th>
							<th scope='col'>End</th>
							{/* <th>Action</th> */}
						</tr>
					</thead>
					<tbody>
						{console.log(info[0])}
						{/* {info.map((user) => (
							<tr>
								<th scope='row'>{user.id}</th>
								<td>{user.name}</td>
								<td>{user.event_type}</td>
								<td>{user.start}</td>
								<td>{user.end}</td>
							</tr>
						))} */}
					</tbody>
				</table>
				<a href='/addevent'>
					<button type='button' class='btn btn-primary'>
						Primary
					</button>
				</a>
			</div>
		</div>
	);
};
export default Event;
