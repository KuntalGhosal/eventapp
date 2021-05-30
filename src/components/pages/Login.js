import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {loginUserDispatch} from '../../actions/AuthActions'
import './Login.css';
const Login = (props) => {
	const store = useSelector((state) => state);
	console.log("STORE",store);
	const dispatch = useDispatch();
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
		console.log('Button Clicked');
        setTimeout(
			() => dispatch(loginUserDispatch(user)),
			500,
		)
		

	};
	return (
		<>
			<div id='login'>
				<h1 className='text-center text-white pt-5'>Login Form</h1>
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
									<h3 className='text-center text-info'>Login</h3>
									<div className='form-group'>
										<label for='username' className='text-info'>
											Email:
										</label>
										<br></br>
										<input
											type='email'
											name='email'
											id='username'
											value={user.email}
											onChange={handleChange}
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
											id='password'
											value={user.password}
											onChange={handleChange}
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
										<Link to='/signup' className='text-info'>
											Register
										</Link>
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
export default Login;
