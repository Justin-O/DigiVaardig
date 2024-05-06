import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from "../styles/global.module.css";
import useFooterShadow from "../hooks/useFooterShadow";
import { object } from "prop-types";
import { useState } from "react";

function AssignmentStepsPage({ contentData }) {
	const { chapterURL, assignmentURL, assignmentStepId } = useParams();
	const currentChapterData = contentData.chapters.find(
		(chapter) => chapter.chapterURL === chapterURL,
	);
	const currentAssignmentData = currentChapterData.assignments.find(
		(assignment) => assignment.assignmentURL === assignmentURL,
	);
	const currentAssignmentStepData = currentAssignmentData.assignmentSteps.find(
		(assignmentStep) => assignmentStep.stepId === parseInt(assignmentStepId),
	);

	const descriptionParagraphs = currentAssignmentStepData.stepDescription.split("\n\n");

	// Image loading
	const [imageLoaded, setImageLoaded] = useState(false);
	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	// State for shadow on steps footer
	const showShadow = useFooterShadow();

	// Construct the URL for the next step
	const nextStepUrl = `/${chapterURL}/${assignmentURL}/${parseInt(assignmentStepId) + 1}`;

	// Construct the URL for the previous step
	const previousStepUrl = `/${chapterURL}/${assignmentURL}/${parseInt(assignmentStepId) - 1}`;

	// Get the total number of steps in the assignment
	const totalSteps = currentAssignmentData.assignmentSteps.length;

	// Check if this is the final step in the assignment
	const finalStep = parseInt(assignmentStepId) === totalSteps;

	// Check if this is the first step in the assignment
	const firstStep = parseInt(assignmentStepId) === 1;

	// Progress footer calculation
	const percentageCompleted = ((parseInt(assignmentStepId) - 1) / (totalSteps - 1)) * 100;

	return (
		<>
			<Header
				subheader
				headerTitle={currentAssignmentData.assignmentTitle}
				backButtonPath={`/${chapterURL}`}
			/>
			<div className="flex flex-col w-full items-center">
				<div className="flex flex-col gap-6 px-6 cards:px-0 pb-12 pt-48 w-full max-w-3xl min-h-[calc(100vh-118px)] sm:min-h-[calc(100vh-94px)]">
					<div className="flex flex-col gap-1">
						<h2 className="text-2xl md:text-4xl font-bold">{`Stap ${assignmentStepId}`}</h2>
						<h3 className="text-xl sm:text-2xl">
							{currentAssignmentStepData.stepTitle}
						</h3>
					</div>
					{currentAssignmentStepData.stepImage && (
						<>
							<img
								src={currentAssignmentStepData.stepImage}
								alt="Opdracht afbeelding"
								className="max-h-64 md:max-h-80 w-full object-contain"
								style={{ display: imageLoaded ? "block" : "none" }}
								onLoad={handleImageLoad}
							/>
							{!imageLoaded && (
								<div
									aria-label="Afbeelding laden placeholder"
									className="flex justify-center items-center min-h-64 md:max-h-80 w-full">
									Afbeelding laden...
								</div>
							)}
						</>
					)}
					{descriptionParagraphs && (
						<div>
							{descriptionParagraphs.map((paragraph, index) => (
								<p className="text-base" key={index}>
									{paragraph}
								</p>
							))}
						</div>
					)}
				</div>
				{/* progression footer */}
				<div
					className={`sticky bottom-0 flex flex-col items-center w-full gap-6 bg-sand px-6 py-3 md:py-6 ${showShadow && "shadow-top"} transition duration-300`}>
					<div className="w-full max-w-3xl">
						<div className="flex flex-wrap justify-between items-center gap-4 sm:gap-8 md:gap-12">
							<Link
								aria-label="Navigeer naar de vorige stap in de oefening"
								to={
									firstStep
										? `/${chapterURL}/${assignmentURL}`
										: `${previousStepUrl}`
								}
								className={`order-2 sm:order-1 ${styles.buttonBase} gap-2 pl-2 pr-4 py-2 bg-white hover:bg-grey border border-grey`}>
								<FaAngleLeft size={22} />
								Vorige
							</Link>
							<div className="order-1 sm:order-2 w-full sm:w-fit flex flex-grow justify-between relative">
								<div className="absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 left-0 w-full h-3 px-[3%] -z-10">
									<div
										className={`bg-pink h-3`}
										style={{ width: `${percentageCompleted}%` }}></div>
									<div className="bg-grey flex-1 h-3"></div>
								</div>
								{currentAssignmentData.assignmentSteps.map((assignmentStep) => (
									<div
										key={assignmentStep.stepId}
										className={`flex justify-center items-center h-8 w-8 rounded-full ${assignmentStep.stepId <= parseInt(assignmentStepId) ? "bg-red" : "bg-mediumgrey"} font-semibold text-lg`}>
										{assignmentStep.stepId}
									</div>
								))}
							</div>
							{finalStep ? (
								<Link
									aria-label="Beëindigen oefening en navigeer terug naar het hoofdstuk"
									to={`/${chapterURL}`}
									className={`order-3 ${styles.buttonBase} gap-2 pl-4 pr-2 py-2 bg-red hover:bg-pink text-black`}>
									Beëindigen
									<FaAngleRight size={22} />
								</Link>
							) : (
								<Link
									aria-label="Navigeer naar de volgende stap in de oefening"
									to={`${nextStepUrl}`}
									className={`order-3 ${styles.buttonBase} gap-2 pl-4 pr-2 py-2 bg-black hover:bg-darkgrey text-white`}>
									Volgende
									<FaAngleRight size={22} />
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssignmentStepsPage;

AssignmentStepsPage.propTypes = {
	contentData: object,
};
