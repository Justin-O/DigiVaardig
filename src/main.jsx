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

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage contentData={contentData} />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/:chapterURL",
		element: <ChapterAssignmentsPage contentData={contentData} />,
	},
	{
		path: "/:chapterTitle/:assignmentTitle",
		element: <AssignmentDescriptionPage />,
	},
	{
		path: "/:chapterTitle/:assignmentTitle/:assignmentStepId",
		element: <AssignmentStepsPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<RouterProvider router={router} />,
	// </React.StrictMode>,
);
