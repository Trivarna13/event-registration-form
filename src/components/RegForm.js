import { useState } from "react";
import { useFormValidation } from "./useFormValidation";
import { FormField, SelectField } from "./FormField";
import Summary from "./Summary";

function RegForm() {
	const { formData, errs, handleChange, validate } = useFormValidation({
		name: "",
		email: "",
		age: "",
		attendingWithGuest: "No",
		guestName: "",
	});
	const [submittedData, setSubmittedData] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length === 0) {
			setSubmittedData(formData);
		}
	};

	return (
		<div className="min-h-screen bg-indigo-200 flex items-center justify-center">
			<div className="flex min-h-full flex-1 flex-row justify-center">
				<div className="w-full lg:w-1/2 p-4 shadow-lg ml-8 bg-white max-w-6xl rounded-lg px-6 py-12 my-8 lg:px-8">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Event Registration Form
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6 mt-8">
						<FormField
							label="Name"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							error={errs.name}
							required
						/>
						<FormField
							label="Email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							error={errs.email}
							required
						/>
						<FormField
							label="Age"
							type="number"
							name="age"
							value={formData.age}
							onChange={handleChange}
							error={errs.age}
							required
						/>
						<SelectField
							label="Are you attending with a guest?"
							name="attendingWithGuest"
							value={formData.attendingWithGuest}
							onChange={handleChange}
							error={null}
							required
							options={["No", "Yes"]}
						/>
						{formData.attendingWithGuest === "Yes" && (
							<FormField
								label="Guest Name"
								type="text"
								name="guestName"
								value={formData.guestName}
								onChange={handleChange}
								error={errs.guestName}
								required
							/>
						)}
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-500 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Submit
						</button>
					</form>
				</div>
				{submittedData && <Summary submittedData={submittedData} />}
			</div>
		</div>
	);
}

export default RegForm;
