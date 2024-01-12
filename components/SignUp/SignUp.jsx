import React from "react";
import "./SignUp.css";
import { GiIndiaGate } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
function Login() {
	
	return (
		<div className="spage">
			<form className="sform">
				<h1>Sign Up</h1>
				<div className="flex-column">
					<label>Name </label>
				</div>
				<div className="sinputForm">
					<h6>
						<IoMdPerson />
					</h6>
					<input
						type="text"
						className="input"
						placeholder="Enter your Name"
					/>
				</div>
				<div className="flex-column">
					<label>Contact number</label>
				</div>
				<div className="sinputForm">
					<h6>
						<GiIndiaGate />
					</h6>
					<input
						type="text"
						className="input"
						placeholder="+91 Enter your registered number"
					/>
				</div>
				{/* <div className="flex-column">
					<label>OTP </label>
				</div>
				<div className="sinputForm">
					<h6>
						<MdLock />
					</h6>

					<input
						type="password"
						className="input"
						placeholder="Enter One Time Password"
					/>
				</div> */}
				<span className="login-text">OR</span>
				<div type="button" className="login-with-google-btn">
					Sign in with Google
				</div>
				<Link to='verify'>
				<button className="button-submit">Continue</button>
				</Link>
				<h6>
					Existing user?
					<Link to="/login"
					style={{ color: "red", textDecorationLine: "none" }}
					>   Login</Link>
				</h6>
			</form>
			
		</div>
	);
}

export default Login;
