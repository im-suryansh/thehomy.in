import React, { useEffect } from "react";
import "./OTP.css";

const OTP = () => {
	useEffect(() => {
		const handleKeyUp = (e) => {
			const input = e.target;
			const parent = input.parentElement;

			if (e.keyCode === 8 || e.keyCode === 37) {
				const prev = parent.querySelector(
					`input#${input.getAttribute("data-previous")}`
				);

				if (prev) {
					prev.select();
				}
			} else if (
				(e.keyCode >= 48 && e.keyCode <= 57) ||
				(e.keyCode >= 65 && e.keyCode <= 90) ||
				(e.keyCode >= 96 && e.keyCode <= 105) ||
				e.keyCode === 39
			) {
				const next = parent.querySelector(
					`input#${input.getAttribute("data-next")}`
				);

				if (next) {
					next.select();
				} else {
					const parentForm = parent.closest("form");

					if (
						parentForm &&
						parentForm.getAttribute("data-autosubmit")
					) {
						parentForm.submit();
					}
				}
			}
		};

		const digitInputs = document.querySelectorAll(".digit-group input");

		digitInputs.forEach((input) => {
			input.setAttribute("maxlength", 1);
			input.addEventListener("keyup", handleKeyUp);
		});

		return () => {
			digitInputs.forEach((input) => {
				input.removeEventListener("keyup", handleKeyUp);
			});
		};
	}, []);

	return (
		<div className="OTP-page">
			<div className="OTP-container">
        <h1 className="OTP-heading">Verification Code</h1>
				<div className="prompt">
        Please enter the 4-digit code sent on
				</div>
        <div className="User-contact">
          +91 98********0
        </div>
				<form
					method="get"
					className="digit-group"
					data-group-name="digits"
					data-autosubmit="false"
					autoComplete="off"
				>
					<input
						type="text"
						id="digit-1"
						name="digit-1"
						data-next="digit-2"
					/>
					<input
						type="text"
						id="digit-2"
						name="digit-2"
						data-next="digit-3"
						data-previous="digit-1"
					/>
					<input
						type="text"
						id="digit-3"
						name="digit-3"
						data-next="digit-4"
						data-previous="digit-2"
					/>
					<span className="splitter">&ndash;</span>
					<input
						type="text"
						id="digit-4"
						name="digit-4"
						data-next="digit-5"
						data-previous="digit-3"
					/>
					<input
						type="text"
						id="digit-5"
						name="digit-5"
						data-next="digit-6"
						data-previous="digit-4"
					/>
					<input
						type="text"
						id="digit-6"
						name="digit-6"
						data-previous="digit-5"
					/>
				</form>
        <div className="resend">
        OTP not received?  <span className="red resend">Resend</span>
        </div>
			</div>
		</div>
	);
};

export default OTP;
