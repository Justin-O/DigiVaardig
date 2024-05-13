// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChapterAssignmentsPage from "./pages/ChapterAssignmentsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AssignmentStepsPage from "./pages/AssignmentStepsPage.jsx";
import AssignmentDescriptionPage from "./pages/AssignmentDescriptionPage.jsx";

import contentData from "./data/content.json";
import Welcome from "./pages/onboarding/Welcome.jsx";
import ChaptersOnboarding from "./pages/onboarding/ChaptersOnboarding.jsx";
import AssignmentsOnboarding from "./pages/onboarding/AssignmentsOnboarding.jsx";
import StepsOnboarding from "./pages/onboarding/StepsOnboarding.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage contentData={contentData} />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/:chapterURL",
		element: <ChapterAssignmentsPage contentData={contentData} />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/:chapterURL/:assignmentURL",
		element: <AssignmentDescriptionPage contentData={contentData} />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/:chapterURL/:assignmentURL/:assignmentStepId",
		element: <AssignmentStepsPage contentData={contentData} />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/rondleiding/1",
		element: <Welcome />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/rondleiding/2",
		element: <ChaptersOnboarding />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/rondleiding/3",
		element: <AssignmentsOnboarding />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/rondleiding/4",
		element: <StepsOnboarding />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<RouterProvider router={router} />,
	// </React.StrictMode>,
);
