import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getEventsType, postEvents } from '../../actions/UserActions';
import { useDispatch,useSelector } from 'react-redux';
const AddEvent = () => {
	const dispatch = useDispatch();
	const store = useSelector((state)=>state);
	const [event, setEvent] = useState({
		name: '',
		event_type: '',
		start: '',
		end: '',
		
	});
	const evTypes = store.user.eventTypes;
	console.log("ETYPES",evTypes);
	useEffect(() => {
		dispatch(getEventsType())
	},[])
	
	

	const handleChange = (e) => {
		console.log("EEE",e);
		// console.log([e.target.value]);
		// console.log([e.target.name]);
		setEvent({ ...event, [e.target.name]: e.target.value });
	};
	// console.log(user);
	const onSubmit = async (e) => {
		e.preventDefault();
		
		var data2 = JSON.stringify(event);
		console.log('DATA@',data2);
		console.log('Button Clicked');
		dispatch(postEvents(data2));
		// alert("Event added success")
		
	};
	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Add A Event</h2>

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
							onChange={handleChange}
							>
							
							
							{store.user.eventTypes.map((data,id) =>{
								
								return<option
								
								key={id}>
								{data}
								</option>
								
								
							})}

							
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
						value='Add Event'
					/>
					<Link to='/event' className='btn btn-primary btn-block btn1'>
						Back
					</Link>
				</form>
			</div>
		</div>
	);
};

export default AddEvent;
