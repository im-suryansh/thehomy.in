import React from "react";
import "./Login.css";
import { GiIndiaGate } from "react-icons/gi";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsAlignEnd } from "react-icons/bs";
function Login() {
	return (
		<div className="spage">
			<form className="sform">
				<h1>Login</h1>
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
				<div className="flex-column">
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
				</div>

				<span className="login-text">OR</span>
				<div type="button" className="login-with-google-btn">
					Login with Google
				</div>
				<button className="button-submit">Login</button>
				<h6>
					Not a user?
					<Link
						to="/signup"
						style={{ color: "red", textDecorationLine: "none" }}
					>
						{" "}
						Sign up
					</Link>
				</h6>
			</form>
		</div>
	);
}

export default Login;
