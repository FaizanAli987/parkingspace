import React,{useState} from 'react'
import { ServerUrl } from '../../helper'
import { setAdminAuth } from '../../Redux/slices/UserData'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Login() {
	const dispatch=useDispatch()
	let history=useHistory()
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
	const doLogin=(e)=>{
		// if(email==''||password==''){
		// 	alert('Please enter email and password')
		// }else{
			e.preventDefault();
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email:email,password:password})
			};
			fetch(`${ServerUrl}/login`, requestOptions)
				.then(response => response.json())
				.then(data => {
					if(data.success==false){
						alert(data.message)
					}else{
						console.log(data)
						// window.location.href='/dashboard'
						// localStorage.setItem("isAuthenticated","true")
						dispatch(setAdminAuth(true))
						history.push('/dashboard')
						// window.location.pathname='/dashboard'
					}
				});
		// }
		
	}
  return (
    <>
    
    <div className="login-bg">
	<div className="screen">
		<div className="screen__content">
            
			<form className="login" onSubmit={doLogin}>
            <h3>Welcome!</h3>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div className="social-login">
			
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    
    </>
  )
}

export default Login