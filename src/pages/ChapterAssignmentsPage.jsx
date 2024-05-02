import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/global.module.css";
import { FaRegLightbulb, FaArrowRightLong } from "react-icons/fa6";
import { object } from "prop-types";

function ChapterAssignmentsPage({ contentData }) {
	const currentLocation = useLocation();

	const assignmentsData = contentData.chapters.find(
		(chapter) => chapter.chapterId === 1,
	).assignments;

	return (
		<>
			<Header
				subheader
				headerTitle={"1 - Een hele lange hoofdstuknaam"}
				backButtonPath={"/"}
			/>
			<div className="flex w-full justify-center">
				<div className="flex flex-col px-6 cards:px-0 pb-6 pt-48 md:pt-52 w-full max-w-3xl">
					<p className="text-base md:text-lg">
						Ontdek hoe u e-mails verzendt met vertrouwen met de oefeningen en tips op
						deze pagina! Kies een van de oefeningen hier onder om te beginnen.
					</p>

					<div className="relative mt-12 md:mt-16 mb-6 -z-10">
						<div className="flex justify-center items-center min-h-24 bg-white rounded-md border border-grey px-8 md:px-16 py-6">
							<p className="text-lg md:text-xl font-semibold">
								Vul altijd het e-mailadres van de ontvanger in voordat u de e-mail
								verstuurt.
							</p>
							<div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-2 mr-2 flex justify-center items-center bg-black border border-grey p-2.5 rounded-full text-red">
								<FaRegLightbulb size={32} />
							</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-6 justify-center cards:justify-between">
						{assignmentsData.map((assignement) => (
							<div
								key={assignement.assignementId}
								className="flex flex-col min-w-[272px] max-h-[304px] max-w-[370px] w-full bg-white rounded-md border border-grey overflow-hidden">
								<Link to={`${currentLocation.pathname}/PlaceholderAssignment`}>
									<img
										src={assignement.assignmentImage}
										alt="Opdracht afbeelding"
										className="h-44 w-full object-cover hover:brightness-95"
									/>
								</Link>
								<div className="flex flex-col justify-center gap-4 min-h-32 border-t border-grey p-3">
									<h3 className="text-lg xs:text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
										{assignement.assignmentTitle}
									</h3>
									<Link
										to={`${currentLocation.pathname}/PlaceholderAssignment`}
										className={`${styles.buttonBase} ${styles.buttonDefault} bg-black hover:bg-darkgrey text-white w-fit gap-6`}>
										Open oefening
										<FaArrowRightLong size={24} />
									</Link>
								</div>
							</div>
						))}
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
