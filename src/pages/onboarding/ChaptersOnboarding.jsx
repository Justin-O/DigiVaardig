import OnboardingContainer from "./OnboardingContainer";
import { FaArrowRightLong } from "react-icons/fa6";

function ChaptersOnboarding() {
	return (
		<OnboardingContainer>
			<div className="flex flex-col gap-16">
				<h1 className="text-2xl font-semibold text-center leading-relaxed">
					Hier ziet u een voorbeeld van de hoofdstukken waar u zometeen uit kunt kiezen.
				</h1>
				<div
					aria-label={`Voorbeeldhoofdstuk`}
					className="flex justify-between items-center gap-3 xs:gap-4 px-4 py-3 bg-white hover:bg-lightgrey hover:drop-shadow-sm rounded-md border border-grey text-black text-lg xs:text-xl font-bold text-ellipsis">
					<div className="flex justify-center items-center rounded-full border-[5px] border-pink min-w-[50px] min-h-[50px] text-pink font-bold text-3xl">
						1
					</div>
					Voorbeeld
					<div className="ml-auto min-w-6 xs:min-w-8">
						<FaArrowRightLong size={30} />
					</div>
				</div>
			</div>
		</OnboardingContainer>
	);
}

export default ChaptersOnboarding;
