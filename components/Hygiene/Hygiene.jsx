import React from "react";
// import "./Dustguard.css";x
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Hygiene = () => {
	const [selectedOptions1, setSelectedOptions1] = useState(null);
	const [selectedOptions2, setSelectedOptions2] = useState(null);

	const [selectedDropdown, setSelectedDropdown] = useState("");

	// State for checkboxes
	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(false);
	const [checkbox3, setCheckbox3] = useState(false);

	// State for button-specific checkboxes
	const [button1Checkbox1, setButton1Checkbox1] = useState(false);
	const [button1Checkbox2, setButton1Checkbox2] = useState(false);
	const [button1Checkbox3, setButton1Checkbox3] = useState(false);

	const [button2Checkbox1, setButton2Checkbox1] = useState(false);
	const [button2Checkbox2, setButton2Checkbox2] = useState(false);
	const [button2Checkbox3, setButton2Checkbox3] = useState(false);

	const [button3Checkbox1, setButton3Checkbox1] = useState(false);
	const [button3Checkbox2, setButton3Checkbox2] = useState(false);
	const [button3Checkbox3, setButton3Checkbox3] = useState(false);

	// State to track which button is selected
	const [selectedButton, setSelectedButton] = useState(null);

	// Handle radio button change
	const handleRadioChange1 = (event) => {
		setSelectedOption1(event.target.value);
	};

	const handleRadioChange2 = (event) => {
		setSelectedOption2(event.target.value);
	};

	// Handle slider change
	const handleSliderChange1 = (event) => {
		setSliderValue1(parseInt(event.target.value, 10));
	};

	const handleSliderChange2 = (event) => {
		setSliderValue2(parseInt(event.target.value, 10));
	};

	// Handle dropdown change
	const handleDropdownChange = (event) => {
		setSelectedDropdown(event.target.value);
	};

	// Handle checkbox change
	const handleCheckboxChange1 = () => {
		setCheckbox1(!checkbox1);
	};

	const handleCheckboxChange2 = () => {
		setCheckbox2(!checkbox2);
	};

	const handleCheckboxChange3 = () => {
		setCheckbox3(!checkbox3);
	};

	// Handle button click
	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	// Handle button-specific checkbox changes
	const handleButton1CheckboxChange1 = () => {
		setButton1Checkbox1(!button1Checkbox1);
	};

	const handleButton1CheckboxChange2 = () => {
		setButton1Checkbox2(!button1Checkbox2);
	};

	const handleButton1CheckboxChange3 = () => {
		setButton1Checkbox3(!button1Checkbox3);
	};

	const handleButton2CheckboxChange1 = () => {
		setButton2Checkbox1(!button2Checkbox1);
	};

	const handleButton2CheckboxChange2 = () => {
		setButton2Checkbox2(!button2Checkbox2);
	};

	const handleButton2CheckboxChange3 = () => {
		setButton2Checkbox3(!button2Checkbox3);
	};

	const handleButton3CheckboxChange1 = () => {
		setButton3Checkbox1(!button3Checkbox1);
	};

	const handleButton3CheckboxChange2 = () => {
		setButton3Checkbox2(!button3Checkbox2);
	};

	const handleButton3CheckboxChange3 = () => {
		setButton3Checkbox3(!button3Checkbox3);
	};

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Do something with the form data
	};

	// Render checkboxes based on the selected button
	const renderCheckboxes = () => {
		if (selectedButton === "button1") {
			return (
				<>
					<div className="drop-btn-cb">
						<h5>Morning</h5>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox1}
								onChange={handleButton1CheckboxChange1}
							/>
							7:00 AM to 9:00 AM
						</label>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox2}
								onChange={handleButton1CheckboxChange2}
							/>
							9:00 AM to 11:00 AM
						</label>
					</div>
				</>
			);
		} else if (selectedButton === "button2") {
			return (
				<div className="drop-btn-cb">
					<h5>Afternoon</h5>

					<label>
						<input
							type="checkbox"
							checked={button2Checkbox1}
							onChange={handleButton2CheckboxChange1}
						/>
						11:00 AM to 1:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button2Checkbox2}
							onChange={handleButton2CheckboxChange2}
						/>
						1:00 PM to 3:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button2Checkbox3}
							onChange={handleButton2CheckboxChange3}
						/>
						3:00 PM to 5:00 PM
					</label>
				</div>
			);
		} else if (selectedButton === "button3") {
			return (
				<div className="drop-btn-cb">
					<h5>Evening</h5>

					<label>
						<input
							type="checkbox"
							checked={button3Checkbox3}
							onChange={handleButton3CheckboxChange3}
						/>
						4:00 PM to 5:00 PM
					</label>

					<label>
						<input
							type="checkbox"
							checked={button3Checkbox1}
							onChange={handleButton3CheckboxChange1}
						/>
						5:00 PM to 6:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button3Checkbox2}
							onChange={handleButton3CheckboxChange2}
						/>
						6:00 PM to 7:00 PM
					</label>
				</div>
			);
		} else {
			// Default: No checkboxes
			return null;
		}
	};
	// timing code ends
	const [isRed, setIsRed] = useState(false);

	const handleClick = () => {
		setIsRed(!isRed);
	};

	const [selectedOption1, setSelectedOption1] = useState(null);
	const [isPopupOpen1, setPopupOpen1] = useState(false);

	const [selectedOption2, setSelectedOption2] = useState(null);
	const [isPopupOpen2, setPopupOpen2] = useState(false);

	const [selectedOption3, setSelectedOption3] = useState(null);
	const [isPopupOpen3, setPopupOpen3] = useState(false);

	const handleOptionSelect1 = (option) => {
		setSelectedOption1(option);
		// setTimeout(() => {
		// 	setPopupOpen1(false);
		// }, 1500);
	};

	const handleOptionSelect2 = (option) => {
		setSelectedOption2(option);
		// setTimeout(() => {
		// 	setPopupOpen2(false);
		// }, 1500);
	};

	const handleOptionSelect3 = (option) => {
		setSelectedOption3(option);

		// setTimeout(() => {
		// 	setPopupOpen3(false);
		// }, 1500);
	};

	return (
		<>
			<div className="CookPage-container">
				<div>
					<h1>Mr Hygiene</h1>
					<h2>Toilet Cleaner</h2>
					<div className="cardbox">
						<div
							className="ccard"
							onClick={() => setPopupOpen1(true)}
						>
							<div className="ccard-details">
								<p className="ctext-title">Homy</p>
								<p className="ctext-body">
									Starting price at{" "}
									<span className="red">₹ 499</span>
								</p>

								<p class="ccard-info red">{selectedOption1}</p>
							</div>
						</div>
						<form
							className={`pop-up ${isPopupOpen1 ? "active" : ""}`}
						>
							{isPopupOpen1 && (
								<div className="main-popup">
									<div className="popup-menu">
										<h1 className="red center">HOMY</h1>
										<div
											onClick={() => {
												handleClick;
												handleOptionSelect1("Daily");
											}}
										>
											<div className="pop-up-option">
												<h2>Daily</h2>

												<p> ₹ 499</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect1("Weekly")
											}
										>
											<div className="pop-up-option">
												<h2>Weekly</h2>
												<p> ₹ 1899</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect1("Monthly")
											}
										>
											<div className="pop-up-option">
												<h2>Monthly</h2>
												<p> ₹ 4049</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect1(
													"Half Yearly"
												)
											}
										>
											<div className="pop-up-option">
												<h2>Half Yearly</h2>
												<p> ₹ 20249</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect1("Yearly")
											}
										>
											<div className="pop-up-option">
												<h2>Yearly</h2>
												<p> ₹ 32399</p>
											</div>
											<hr className="mb-1" />
										</div>

										<span className="pop-up-selected">
											Selected Option: {selectedOption1}
										</span>
										<button
											className="close-button"
											onClick={() => {
												setPopupOpen1(false);
											}}
										>
											<IoMdClose />
										</button>
									</div>
									<div className="pop-up-timing">
										<div className="form-head">
											<h className="red ">Time Slots</h>
										</div>
										<div className="drop-btn bdr">
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button1"
														)
													}
												>
													Morning
												</button>
												{selectedButton === "button1" &&
													renderCheckboxes()}
											</div>

											{/* Button 2 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button2"
														)
													}
												>
													Afternoon
												</button>
												{selectedButton === "button2" &&
													renderCheckboxes()}
											</div>

											{/* Button 3 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button3"
														)
													}
												>
													Evening
												</button>
												{selectedButton === "button3" &&
													renderCheckboxes()}
											</div>
										</div>
										{/* Buttons */}
										<Link
											to="/checkout"
											style={{
												textDecorationLine: "none",
											}}
										>
											<div className="sub-res">
												<button
													type="submit"
													className="loginbtn"
												>
													Submit
												</button>
											</div>
										</Link>
									</div>
								</div>
							)}
						</form>

						<div
							className="ccard"
							onClick={() => setPopupOpen2(true)}
						>
							<div className="ccard-details">
								<p className="ctext-title">Homy Pro</p>
								<p className="ctext-body">
									Starting price at{" "}
									<span className="red">₹ 899</span>
								</p>
								<p class="ccard-info red">{selectedOption2}</p>
							</div>
							{/* <button class="ccard-button">More info</button> */}
						</div>
						<form
							className={`pop-up ${isPopupOpen2 ? "active" : ""}`}
						>
							{isPopupOpen2 && (
								<div className="main-popup">
									<div className="popup-menu">
										<h1 className="red">Homy Pro</h1>
										<div
											onClick={() =>
												handleOptionSelect2("Daily")
											}
										>
											<div className="pop-up-option">
												<h2>Daily</h2>
												<p> ₹ 899</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect2("Weekly")
											}
										>
											<div className="pop-up-option">
												<h2>Weekly</h2>
												<p> ₹ 3779</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect2("Monthly")
											}
										>
											<div className="pop-up-option">
												<h2>Monthly</h2>
												<p> ₹ 8099</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect2(
													"Half Yearly"
												)
											}
										>
											<div className="pop-up-option">
												<h2>Half Yearly</h2>
												<p> ₹ 40499</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect2("Yearly")
											}
										>
											<div className="pop-up-option">
												<h2>Yearly</h2>
												<p> ₹ 64800</p>
											</div>
											<hr className="mb-1" />
										</div>

										<h2 className="pop-up-selected">
											Selected Option: {selectedOption2}
										</h2>
										<button
											className="close-button"
											onClick={() => setPopupOpen2(false)}
										>
											<IoMdClose />
										</button>
									</div>

									<div className="pop-up-timing">
										<div className="form-head">
											<h className="red ">Time Slots</h>
										</div>
										<div className="drop-btn bdr">
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button1"
														)
													}
												>
													Morning
												</button>
												{selectedButton === "button1" &&
													renderCheckboxes()}
											</div>

											{/* Button 2 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button2"
														)
													}
												>
													Afternoon
												</button>
												{selectedButton === "button2" &&
													renderCheckboxes()}
											</div>

											{/* Button 3 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button3"
														)
													}
												>
													Evening
												</button>
												{selectedButton === "button3" &&
													renderCheckboxes()}
											</div>
										</div>
										{/* Buttons */}
										<Link
											to="/checkout"
											style={{
												textDecorationLine: "none",
											}}
										>
											<div className="sub-res">
												<button
													type="submit"
													className="loginbtn"
												>
													Submit
												</button>
											</div>
										</Link>
									</div>
								</div>
							)}
						</form>
						<div
							className="ccard"
							onClick={() => setPopupOpen3(true)}
						>
							<div className="ccard-details">
								<p className="ctext-title">Homy Pro Max</p>
								<p className="ctext-body">
									Starting price at{" "}
									<span className="red">₹ 1349</span>
								</p>
								<p class="ccard-info red">{selectedOption3}</p>
							</div>
							{/* <button class="ccard-button">More info</button> */}
						</div>
						<form
							className={`pop-up ${isPopupOpen3 ? "active" : ""}`}
						>
							{isPopupOpen3 && (
								<div className="main-popup">
									<div className="popup-menu">
										<h1 className="red">HOMY PRO MAX</h1>
										<div
											onClick={() =>
												handleOptionSelect3("Daily")
											}
										>
											<div className="pop-up-option">
												<h2>Daily</h2>
												<p> ₹ 1349</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect3("Weekly")
											}
										>
											<div className="pop-up-option">
												<h2>Weekly</h2>
												<p> ₹ 5,669</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect3("Monthly")
											}
										>
											<div className="pop-up-option">
												<h2>Monthly</h2>
												<p> ₹ 12,149</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect3(
													"Half Yearly"
												)
											}
										>
											<div className="pop-up-option">
												<h2>Half Yearly</h2>
												<p> ₹ 60,749</p>
											</div>
											<hr className="mb-1" />
										</div>
										<div
											onClick={() =>
												handleOptionSelect3("Yearly")
											}
										>
											<div className="pop-up-option">
												<h2>Yearly</h2>
												<p> ₹ 97,199</p>
											</div>
											<hr className="mb-1" />
										</div>

										<h2 className="pop-up-selected">
											Selected Option: {selectedOption3}
										</h2>
										<button
											className="close-button"
											onClick={() => setPopupOpen3(false)}
										>
											<IoMdClose />
										</button>
									</div>
									<div className="pop-up-timing">
										<div className="form-head">
											<h className="red ">Time Slots</h>
										</div>
										<div className="drop-btn bdr">
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button1"
														)
													}
												>
													Morning
												</button>
												{selectedButton === "button1" &&
													renderCheckboxes()}
											</div>

											{/* Button 2 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button2"
														)
													}
												>
													Afternoon
												</button>
												{selectedButton === "button2" &&
													renderCheckboxes()}
											</div>

											{/* Button 3 with Checkboxes */}
											<div>
												<button
													type="button"
													className="custbtn"
													onClick={() =>
														handleButtonClick(
															"button3"
														)
													}
												>
													Evening
												</button>
												{selectedButton === "button3" &&
													renderCheckboxes()}
											</div>
										</div>
										{/* Buttons */}
										<Link
											to="/checkout"
											style={{
												textDecorationLine: "none",
											}}
										>
											<div className="sub-res">
												<button
													type="submit"
													className="loginbtn"
												>
													Submit
												</button>
											</div>
										</Link>
									</div>
								</div>
							)}
						</form>
					</div>
				</div>

				<img className="cookimg" src="../../public/temp3.png" alt="" />
			</div>
		</>
	);
};

export default Hygiene;
