import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {getEventListDispatch} from '../../actions/UserActions'
import { useSelector,useDispatch } from 'react-redux';

const Event = () => {
	


	
		const store = useSelector((state) => state);
    const dispatch = useDispatch()
	const List = store.user.eventsList;
		// e.preventDefault();
		useEffect(() =>{
			dispatch(getEventListDispatch())
		},[])
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
						
						{List.map((user) => (
							<tr>
								<th scope='row'>{user.id}</th>
								<td>{user.name}</td>
								<td>{user.event_type}</td>
								<td>{user.start}</td>
								<td>{user.end}</td>
							</tr>
						))}
					</tbody>
				</table>
				<Link to='/addevent'>
					<button type='button' class='btn btn-primary'>
						Add Event
					</button>
				</Link>
			</div>
		</div>
	);
};
export default Event;
