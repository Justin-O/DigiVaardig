import { Link, useLocation } from "react-router-dom";
import styles from "../styles/global.module.css";
import Header from "../components/Header";

function AssignmentDescriptionPage() {
	const currentLocation = useLocation();

	return (
		<>
			<Header subheader headerTitle={"Placeholder Opdracht titel"} backButtonPath={"../"} />
			<div className="flex w-full justify-center">
				<div className="flex flex-col justify-center gap-12 px-6 cards:px-0 pb-16 pt-48 md:pt-52 w-full max-w-3xl min-h-screen">
					<p className="min-h-[35vh] text-lg md:text-xl">
						In deze oefening wordt stapsgewijs uitgelegd hoe u de tekstopmaak van uw
						e-mails kunt aanpassen, inclusief het wijzigen van lettertypen, groottes en
						kleuren. Door deze vaardigheden te leren, kunt u niet alleen uw e-mails
						personaliseren, maar ook de leesbaarheid verbeteren en uw boodschap
						effectiever overbrengen. <br />
						<br />
						Of u nu wilt opvallen met creatieve kleuren en stijlen of een professionele
						uitstraling wilt behouden, deze oefening biedt de tools die u nodig hebt om
						uw e-mailcommunicatie naar een hoger niveau te tillen.
					</p>
					<div className="sticky bottom-0 bg-sand py-4 md:py-6 z-10">
						<div className="flex justify-center">
							<Link
								to={`${currentLocation.pathname}/stap-1`}
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
