import OnboardingContainer from "./OnboardingContainer";

function StepsOnboarding() {
	const fakeStepsArray = [1, 2, 3, 4];

	return (
		<OnboardingContainer>
			<div className="flex flex-col items-center gap-16">
				<h1 className="text-2xl font-semibold text-center leading-relaxed">
					Doorloop vervolgens de stappen van de oefening.
				</h1>
				<div className="flex flex-grow w-11/12 sm:w-3/4 justify-between relative">
					<div className="absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 left-0 w-full h-3 px-[3%]">
						<div className={`bg-pink h-4`} style={{ width: "33%" }}></div>
						<div className="bg-grey flex-1 h-4"></div>
					</div>
					{fakeStepsArray.map((step) => (
						<div
							key={step}
							className={`flex justify-center items-center h-10 w-10 rounded-full ${step <= 2 ? "bg-red" : "bg-mediumgrey"} font-semibold text-lg z-10`}>
							{step}
						</div>
					))}
				</div>
			</div>
		</OnboardingContainer>
	);
}

export default StepsOnboarding;
