import { Link } from "react-router-dom";
// import styles from "../styles/global.module.css";
import Header from "../components/Header";
import { FaArrowRightLong } from "react-icons/fa6";
// import contentData from "../data/content.json";
import { object } from "prop-types";

function HomePage({ contentData }) {
	return (
		<>
			<Header />
			<div className="flex w-full justify-center">
				<div className="flex flex-col gap-3 p-6 pt-32 md:min-h-screen md:justify-center w-full max-w-5xl">
					{contentData.chapters.map((chapter) => (
						// Chapter button element
						<Link
							to={chapter.chapterURL}
							key={chapter.chapterId}
							className="flex justify-between items-center gap-3 xs:gap-4 px-4 py-5 lg:py-3 bg-white hover:bg-lightgrey hover:drop-shadow-sm rounded-md border border-grey text-black text-lg xs:text-2xl font-bold">
							<div className="flex justify-center items-center rounded-full border-[5px] border-pink min-w-[50px] min-h-[50px] xs:min-w-[60px] xs:min-h-[60px] text-pink font-bold text-2xl xs:text-4xl">
								{chapter.chapterId}
							</div>
							{chapter.chapterTitle}
							<div className="ml-auto min-w-6 xs:min-w-8">
								<FaArrowRightLong size={30} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default HomePage;

HomePage.propTypes = {
	contentData: object,
};
