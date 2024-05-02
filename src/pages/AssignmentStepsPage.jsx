import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from "../styles/global.module.css";

function AssignmentStepsPage() {
	return (
		<>
			<Header subheader headerTitle={"Placeholder Opdracht titel"} backButtonPath={"/"} />
			<div className="flex flex-col w-full items-center">
				<div className="flex flex-col gap-6 px-6 cards:px-0 pb-16 pt-48 w-full max-w-3xl min-h-[calc(100vh-134px)] sm:min-h-[calc(100vh-94px)]">
					<div className="flex flex-col gap-1">
						<h2 className="text-2xl md:text-4xl font-bold">Stap 1</h2>
						<h3 className="text-xl sm:text-2xl">
							Pas het lettertype van uw e-mails aan.
						</h3>
					</div>
					<img
						src="https://bigtex.com/wp-content/uploads/2018/05/placeholder-1920x1080.png"
						alt="Opdracht afbeelding"
						className="max-h-64 md:max-h-80 w-full object-contain"
					/>
					<p>
						Om uw e-mails een eigen karakter te geven, kan het helpen om een ander
						lettertype te kiezen. <br />
						<br /> Om het lettertype te veranderen, navigeert u naar de tekstopmaakbalk
						wanneer u een e-mail schrijft. Hier kunt u alle beschikbare lettertypes
						bekijken in het uitklapmenu.
					</p>
				</div>
				{/* progression footer */}
				<div className="sticky bottom-0 flex flex-col items-center w-full gap-6 bg-sand p-6 md:py-6">
					<div className="w-full max-w-3xl">
						<div className="flex flex-wrap justify-between items-center gap-6 sm:gap-12">
							<Link
								to={`/kennismaking/PlaceholderAssignment`}
								className={`order-2 sm:order-1 ${styles.buttonBase} gap-2 pl-2 pr-4 py-2 bg-white hover:bg-grey border border-grey`}>
								<FaAngleLeft size={22} />
								Vorige
							</Link>
							<div className="order-1 sm:order-2 w-full sm:w-fit flex flex-grow justify-center">
								<div className="bg-red w-full h-4"></div>
							</div>
							<Link
								to={`/`}
								className={`order-3 ${styles.buttonBase} gap-2 pl-4 pr-2 py-2 bg-black hover:bg-darkgrey text-white`}>
								Volgende
								<FaAngleRight size={22} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssignmentStepsPage;
