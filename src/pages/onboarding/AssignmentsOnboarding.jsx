import OnboardingContainer from "./OnboardingContainer";

function AssignmentsOnboarding() {
	return (
		<OnboardingContainer>
			<div className="flex flex-col gap-10">
				<h1 className="text-2xl font-semibold text-center leading-relaxed">
					Elk hoofstuk heeft oefeningen die u kunt volgen. Hieronder ziet u een voorbeeld
					van hoe een oefening eruitziet.
				</h1>
				<div className="flex w-full justify-center">
					<div className="flex flex-col min-w-[272px] max-h-[240px] max-w-[330px] w-full bg-white rounded-md border border-grey overflow-hidden">
						<img
							src={
								"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
							}
							alt="Opdracht afbeelding"
							className="h-44 w-full object-cover hover:brightness-95"
						/>
						<div className="flex flex-col justify-center gap-4 min-h-16 border-t border-grey p-3">
							<h3 className="text-lg xs:text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
								Oefening voorbeeld
							</h3>
						</div>
					</div>
				</div>
			</div>
		</OnboardingContainer>
	);
}

export default AssignmentsOnboarding;
