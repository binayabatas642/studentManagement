import "../css/userRegistrationForm.css";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";

const UserRegistrationForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<InputField
						label="First Name"
						type="text"
						inputName="firstName"
						register={register}
						required
					/>
				</div>

				<div>
					<InputField
						label="Last Name"
						type="text"
						inputName="lastName"
						register={register}
						required
					/>
				</div>

				<div>
					<InputField
						label="Email"
						type="email"
						inputName="email"
						register={register}
						required
					/>
				</div>

				<div>
					<InputField
						label="Password"
						type="password"
						inputName="password"
						register={register}
						required
					/>
				</div>

				<div>
					<InputField
						label="Confirm Password"
						type="password"
						inputName="confirmPassword"
						register={register}
						required
					/>
				</div>

				<Button type="submit" buttonName="Submit" />
			</form>
		</div>
	);
};

export default UserRegistrationForm;
