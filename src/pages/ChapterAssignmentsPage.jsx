import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/global.module.css";
import { FaRegLightbulb, FaArrowRightLong } from "react-icons/fa6";
import { object } from "prop-types";

function ChapterAssignmentsPage({ contentData }) {
	const { chapterURL } = useParams();
	const currentChapterData = contentData.chapters.find(
		(chapter) => chapter.chapterURL === chapterURL,
	);
	const assignmentsData = currentChapterData ? currentChapterData.assignments : undefined;
	const tipsData = currentChapterData ? currentChapterData.tips : undefined;

	return (
		<>
			<Header
				subheader
				headerTitle={currentChapterData.chapterTitle}
				chapterId={currentChapterData.chapterId}
				backButtonPath={"/"}
			/>
			<div className="flex w-full justify-center">
				<div className="flex flex-col px-6 cards:px-0 pb-6 pt-48 md:pt-52 w-full max-w-3xl">
					{currentChapterData && (
						<p className="text-base md:text-lg">
							{currentChapterData.chapterDescription}
						</p>
					)}

					{/* Tips element */}
					{tipsData && (
						<div className="relative mt-12 md:mt-16 mb-6">
							<div className="flex justify-center items-center min-h-24 bg-white rounded-md border border-grey px-8 md:px-16 py-6">
								<div className="text-lg md:text-xl font-semibold">
									{tipsData.map((tip) => (
										<p key={tip.tipId}>{tip.tipText}</p>
									))}
								</div>
								<div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-2 mr-2 flex justify-center items-center bg-black border border-grey p-2.5 rounded-full text-red">
									<FaRegLightbulb size={32} />
								</div>
							</div>
						</div>
					)}

					{/* Cards container */}
					<div className="flex flex-wrap gap-6 justify-center cards:justify-between">
						{/* Assignment cards */}
						{assignmentsData ? (
							assignmentsData.map((assignment) => (
								<div
									key={assignment.assignmentId}
									className="flex flex-col min-w-[272px] max-h-[304px] max-w-[370px] w-full bg-white rounded-md border border-grey overflow-hidden">
									<Link to={assignment.assignmentURL}>
										<img
											src={assignment.assignmentImage}
											alt="Opdracht afbeelding"
											className="h-44 w-full object-cover hover:brightness-95"
										/>
									</Link>
									<div className="flex flex-col justify-center gap-4 min-h-32 border-t border-grey p-3">
										<h3 className="text-lg xs:text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
											{assignment.assignmentTitle}
										</h3>
										<Link
											to={assignment.assignmentURL}
											className={`${styles.buttonBase} ${styles.buttonDefault} bg-black hover:bg-darkgrey text-white w-fit gap-6`}>
											Open oefening
											<FaArrowRightLong size={24} />
										</Link>
									</div>
								</div>
							))
						) : (
							// Error element
							<div className="flex justify-center items-center w-full min-h-80 md:px-24">
								<div className="flex justify-center items-center min-h-24 bg-white rounded-md border border-red px-8 md:px-16 py-6">
									<p className="text-xl md:text-2xl font-semibold text-center">
										Sorry, er zijn nog geen oefeningen voor dit hoofdstuk. Maar
										we werken eraan! Blijf op de hoogte voor updates!
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ChapterAssignmentsPage;

ChapterAssignmentsPage.propTypes = {
	contentData: object,
};
