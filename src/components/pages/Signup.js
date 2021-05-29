import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
const Signup = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();
	const handleChange = (e) => {
		// console.log([e.target.value]);
		// console.log([e.target.name]);
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	// console.log(user);
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		var data2 = JSON.stringify(user);
		console.log(data2);
		// console.log('Button Clicked');
		const config = {
			method: 'POST',
			url: 'https://ik-react-task.herokuapp.com/accounts/register/',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data2,
		};
		const res = await axios(config);
		console.log(res);
		console.log(res.data);
		if (res.data) {
			alert('User registered Successfull');
			history.push('/');
		}
	};
	return (
		<>
			<div id='login'>
				<h1 className='text-center text-white pt-5'>Signup Form</h1>
				<div className='container'>
					<div
						id='login-row'
						className='row justify-content-center align-items-center'>
						<div id='login-column' className='col-md-6'>
							<div id='login-box' className='col-md-12'>
								<form
									id='login-form'
									className='form'
									action=''
									onSubmit={(e) => onSubmit(e)}>
									<h3 className='text-center text-info'>Register</h3>
									<div className='form-group'>
										<label for='username' className='text-info'>
											Email:
										</label>
										<br></br>
										<input
											type='email'
											name='email'
											value={user.email}
											onChange={handleChange}
											id='username'
											className='form-control'
										/>
									</div>
									<div className='form-group'>
										<label for='password' className='text-info'>
											Password:
										</label>
										<br></br>
										<input
											type='password'
											name='password'
											value={user.password}
											onChange={handleChange}
											id='password'
											className='form-control'
										/>
									</div>
									<div className='form-group'>
										<br></br>
										<input
											type='submit'
											name='submit'
											className='btn btn-info btn-md'
											value='submit'
										/>
									</div>
									<div id='register-link' className='text-right'>
										<NavLink to='/' className='text-info'>
											Back
										</NavLink>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Signup;
