import React from "react";

function Summary({ submittedData }) {
	return (
		<div className="w-full lg:w-1/2 px-6 shadow-lg ml-8 bg-white max-w-6xl rounded-lg py-12 mx-8 my-8 lg:px-8">
			<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Submitted Data
			</h2>
			<div className="space-y-10 mt-8">
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Name:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.name}
					</div>
				</div>
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Email:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.email}
					</div>
				</div>
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Age:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.age}
					</div>
				</div>
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Attending with Guest:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.attendingWithGuest}
					</div>
				</div>
				{submittedData.attendingWithGuest === "Yes" && (
					<div>
						<div className="block text-sm font-medium leading-6 text-gray-900">
							Guest Name:
						</div>
						<div className="block mt-2 text-gray-700">
							{submittedData.guestName}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Summary;
