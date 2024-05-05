import { Link, useParams } from "react-router-dom";
import styles from "../styles/global.module.css";
import Header from "../components/Header";
import { object } from "prop-types";

function AssignmentDescriptionPage({ contentData }) {
	const { chapterURL, assignmentURL } = useParams();
	const currentChapterData = contentData.chapters.find(
		(chapter) => chapter.chapterURL === chapterURL,
	);
	const currentAssignmentData = currentChapterData.assignments.find(
		(assignment) => assignment.assignmentURL === assignmentURL,
	);

	const descriptionParagraphs = currentAssignmentData.assignmentDescription.split("\n\n");

	return (
		<>
			<Header
				subheader
				headerTitle={currentAssignmentData.assignmentTitle}
				backButtonPath={`/${chapterURL}`}
			/>
			<div className="flex w-full justify-center">
				<div className="flex flex-col justify-center gap-6 px-6 cards:px-0 pb-16 pt-48 md:pt-52 w-full max-w-3xl min-h-screen">
					<div className="flex flex-col gap-6 min-h-[35vh]">
						{descriptionParagraphs.map((paragraph, index) => (
							<p className="text-lg md:text-xl" key={index}>
								{paragraph}
							</p>
						))}
					</div>
					<div className="sticky bottom-0 bg-sand py-4 md:py-6 z-10 ">
						<div className="flex justify-center">
							<Link
								to={"1"}
								className={`${styles.buttonBase} bg-red hover:bg-pink px-10 py-2`}>
								Begin oefening
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssignmentDescriptionPage;

AssignmentDescriptionPage.propTypes = {
	contentData: object,
};
