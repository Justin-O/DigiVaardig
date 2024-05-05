import { useState, useEffect } from "react";

function useScrollShadow() {
	const [showShadow, setShowShadow] = useState(false);

	useEffect(() => {
		function checkContentHeight() {
			const contentHeight = document.body.scrollHeight;
			const viewportHeight = window.innerHeight;
			setShowShadow(contentHeight > viewportHeight);
		}

		checkContentHeight();

		window.addEventListener("resize", checkContentHeight);

		return () => {
			window.removeEventListener("resize", checkContentHeight);
		};
	}, []);

	return showShadow;
}

export default useScrollShadow;
