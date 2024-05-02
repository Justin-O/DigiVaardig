import { Link } from "react-router-dom";

import styles from "../styles/global.module.css";

function ErrorPage() {
	return (
		<div>
			<div className="flex flex-col p-4 gap-12 md:gap-20 justify-center items-center w-screen h-screen">
				<h1 className="text-4xl md:text-6xl text-center">Deze pagina bestaat niet.</h1>
				<Link
					to="/"
					type="button"
					aria-label="Home knop"
					className={`${styles.buttonBase} ${styles.buttonDefault} bg-red hover:bg-pink`}>
					Ga terug naar de homepagina
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
