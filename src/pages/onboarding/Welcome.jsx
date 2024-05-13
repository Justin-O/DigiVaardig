import OnboardingContainer from "./OnboardingContainer";

function Welcome() {
	return (
		<OnboardingContainer>
			<>
				<div className="flex flex-col gap-3">
					<h1 className="font-semibold text-2xl xs:text-3xl text-center">Welkom bij</h1>
					<h1 className="font-bold text-3xl xs:text-4xl text-center">
						<span className="font-normal">dbieb - </span>{" "}
						<span className="text-red">DigiVaardig</span>
					</h1>
				</div>
				<div className="flex flex-col gap-3">
					<p className="font-semibold text-xl xs:text-2xl text-center leading-relaxed">
						Hier vindt u handige tips en oefeningen om uw digitale vaardigheden te
						verbeteren!
					</p>
					<p className="font-semibold text-xl xs:text-2xl text-center leading-relaxed">
						Er volgt nu eerst een korte rondleiding.
					</p>
				</div>
			</>
		</OnboardingContainer>
	);
}

export default Welcome;
