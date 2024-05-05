import styles from "../styles/global.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

function Header(props) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 96);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${props.subheader ? "relative" : "fixed"} flex flex-col w-full z-50`}>
			<div
				className={`${props.subheader && isScrolled ? "hidden" : "flex absolute top-0 justify-between items-center bg-black w-full h-24 px-4 md:px-8"}`}>
				<Link
					aria-label="Navigeer naar de homepagina"
					className={`${props.subheader && isScrolled ? "hidden" : "flex items-center h-full"}`}
					to={"/"}>
					<h1 className="text-2xl md:text-3xl text-white font-normal">
						dbieb - <span className="font-bold text-red">DigiVaardig</span>
					</h1>
				</Link>
				<Link
					aria-label="Navigeer naar de rondleiding"
					to={"/rondleiding/1"}
					className={`${props.subheader && isScrolled ? "hidden" : "flex"}  justify-center items-center rounded-full w-11 h-11 bg-white text-3xl font-bold`}>
					?
				</Link>
			</div>
			{props.subheader && (
				<div
					className={`${isScrolled ? "fixed" : "absolute top-24"} flex items-center bg-darkgrey w-full h-16 px-4 md:px-8`}>
					<div className="flex justify-start w-1/3 md:w-1/5">
						<Link
							aria-label="Navigeer naar terug de vorige pagina"
							to={props.backButtonPath}
							className={`${styles.buttonBase} bg-white hover:bg-grey border border-grey gap-2 pl-1 pr-2 py-1`}>
							<FaAngleLeft size={22} />
							Terug
						</Link>
					</div>
					<div className="flex justify-end md:justify-center w-2/3 md:w-3/5">
						<h2 className="text-white text-lg md:text-2xl font-semibold text-end md:text-center max-h-16 overflow-hidden">
							{props.chapterId && (
								<>
									<span className="text-red">{props.chapterId}</span>
									{" - "}
								</>
							)}
							{props.headerTitle}
						</h2>
					</div>
					<div className="hidden md:flex md:w-1/5"></div>
				</div>
			)}
		</header>
	);
}

Header.propTypes = {
	subheader: PropTypes.bool,
	backButtonPath: PropTypes.string,
	chapterId: PropTypes.number,
	headerTitle: PropTypes.string,
};

export default Header;
