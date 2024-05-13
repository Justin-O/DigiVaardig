import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/global.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useFooterShadow from "../../hooks/useFooterShadow";
import PropTypes from "prop-types";

function OnboardingContainer({ children }) {
	const currentPath = useLocation().pathname;

	// Extract the number from the path
	const match = currentPath.match(/\/rondleiding\/(\d+)/);
	const currentStep = match ? parseInt(match[1]) : 1;

	const prevPagePath = `/rondleiding/${currentStep - 1}`;
	const nextPagePath = `/rondleiding/${currentStep + 1}`;

	const stepsArray = [1, 2, 3, 4];

	// State for shadow on steps footer
	const showShadow = useFooterShadow();

	return (
		<div className="flex flex-col justify-center items-center bg-black min-h-screen md:p-4">
			<div className="flex flex-col md:rounded-md bg-sand">
				<div className="relative flex flex-col gap-12 justify-center items-center w-full px-6 md:px-16 pt-20 pb-3 min-h-[calc(100vh-156px)] xs:min-h-[calc(100vh-168px)] md:min-h-fit md:h-[500px] md:max-w-2xl">
					<Link
						aria-label="Rondleiding overslaan"
						to={"/"}
						className={`absolute top-4 right-4 ${styles.buttonBase} gap-2 px-4 py-2 bg-white hover:bg-grey border border-black`}>
						Overslaan
					</Link>
					{children}
				</div>
				{currentStep === 4 ? (
					<p className="h-14 text-lg font-semibold text-center mb-4 px-4">
						Druk op <span className="text-red">beginnen</span> als u klaar bent om te
						starten
					</p>
				) : (
					<p className="h-14 text-lg font-semibold text-center mb-4 px-4">
						Druk op <span className="text-red">volgende</span> om door te gaan
					</p>
				)}
				<div
					className={`sticky bottom-0 flex flex-col items-center w-full bg-sand md:rounded-b-md px-3 pt-3 pb-6 xs:px-6 xs:py-6 ${showShadow && "shadow-top"} transition duration-300`}>
					<div className="w-full max-w-3xl">
						<div className="flex flex-wrap justify-center items-center gap-6 xs:gap-10">
							{currentStep > 1 ? (
								<Link
									aria-label="Navigeer naar de vorige stap in de oefening"
									to={prevPagePath}
									className={`${styles.buttonBase} gap-2 pl-2 pr-4 py-2 bg-white hover:bg-grey border border-black min-w-[138px]`}>
									<FaAngleLeft size={22} />
									Vorige
								</Link>
							) : (
								<div className="min-w-[138px]"></div>
							)}
							<div className="hidden sm:flex gap-2">
								{stepsArray.map((step) => (
									<Link
										key={step}
										to={`/rondleiding/${step}`}
										className="flex justify-center items-center w-4 h-4 p-1 rounded-full bg-mediumgrey">
										{step === currentStep && (
											<div className="w-full h-full rounded-full bg-darkgrey"></div>
										)}
									</Link>
								))}
							</div>
							{currentStep === 4 ? (
								<Link
									aria-label="Navigeer naar de volgende stap in de oefening"
									to={"/"}
									className={`${styles.buttonBase} gap-2 px-4 py-2 bg-red hover:bg-pink border border-red hover:border-pink text-black min-w-[138px]`}>
									Beginnen
								</Link>
							) : (
								<Link
									aria-label="Navigeer naar de volgende stap in de oefening"
									to={nextPagePath}
									className={`${styles.buttonBase} gap-2 pl-4 pr-2 py-2 bg-black hover:bg-darkgrey border border-black text-white min-w-[138px]`}>
									Volgende
									<FaAngleRight size={22} />
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OnboardingContainer;

OnboardingContainer.propTypes = {
	children: PropTypes.element,
};
