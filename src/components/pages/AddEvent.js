import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AddEvent = () => {
	const [event, setEvent] = useState({
		name: '',
		event_type: '',
		start: '',
		end: '',
		// token:
		// 	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5OTUsInVzZXJuYW1lIjoiaGlyYUBnbWFpbC5jb20iLCJleHAiOjE2MjI4OTg4NTIsImVtYWlsIjoiaGlyYUBnbWFpbC5jb20ifQ.xAtzXAsi0Vsh46BWnzAadgArdT-ob65Lzd7iWT9xWZ0',
	});
	const [info, setInfo] = useState([]);
	useEffect(() => {
		loadEvent();
	}, []);

	const loadEvent = async () => {
		// e.preventDefault();
		const config = {
			method: 'GET',
			url: 'https://ik-react-task.herokuapp.com/events/event_types/',
			headers: {
				// 'Content-Type': 'application/json',
				// Authorization: `Bearer ${event.token} `,
			},
		};
		const res = await axios(config);
		// const res = await fetch(
		// 	'https://ik-react-task.herokuapp.com/events/event_types/'
		// );
		// const data = await res.json();
		console.log(res.data[0]);
		// const [data] = res.data;
		// console.log(data);
		setInfo({ info: res.data });
		// const info = res.data;
		// setUser(data);
	};
	const handleChange = (e) => {
		// console.log([e.target.value]);
		// console.log([e.target.name]);
		setEvent({ ...event, [e.target.name]: e.target.value });
	};
	// console.log(user);
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(event);
		var data2 = JSON.stringify(event);
		console.log(data2);
		console.log('Button Clicked');
		const config = {
			method: 'POST',
			url: 'https://ik-react-task.herokuapp.com/events/',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5OTUsInVzZXJuYW1lIjoiaGlyYUBnbWFpbC5jb20iLCJleHAiOjE2MjI4OTg4NTIsImVtYWlsIjoiaGlyYUBnbWFpbC5jb20ifQ.xAtzXAsi0Vsh46BWnzAadgArdT-ob65Lzd7iWT9xWZ0 ',
			},
			data: data2,
		};
		const res = await axios(config);
		console.log(res);
		console.log(res.data.token);
		if (res.data) {
			alert('User Add Successfull');
			// history.push('/event');
		}
	};
	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Add A User</h2>

				<form onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Event Name'
							name='name'
							value={event.ename}
							onChange={handleChange}
						/>
					</div>

					<div class='form-group'>
						<label for='exampleFormControlSelect1'>Choose EventType</label>
						<select
							class='form-control'
							id='exampleFormControlSelect1'
							name='event_type'
							value={event.etype}
							onChange={handleChange}>
							{/* {console.log(info)} */}
							{/* {info.eventinfo.map((event) => {
								<option>{event}</option>;
							})} */}
							<option>Bootcamp</option>
							<option>Bootcamp</option>
						</select>
					</div>
					<div className='form-group'>
						<label for='exampleFormControlSelect1'>
							Select Start Date & Time
						</label>
						<input
							type='datetime-local'
							className='form-control form-control-lg'
							placeholder='Choose Start Date'
							name='start'
							value={event.date}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<label for='exampleFormControlSelect1'>
							Select End Date & Time
						</label>
						<input
							type='datetime-local'
							className='form-control form-control-lg'
							placeholder='Choose End Date'
							name='end'
							value={event.date2}
							onChange={handleChange}
						/>
					</div>
					<input
						className='btn btn-primary btn-block'
						type='submit'
						name='submit'
						value='Add User'
					/>
					<a href='/event' className='btn btn-primary btn-block btn1'>
						Back
					</a>
				</form>
			</div>
		</div>
	);
};

export default AddEvent;
