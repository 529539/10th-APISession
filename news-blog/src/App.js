import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage";
import "./App.css";

const App = () => {
	console.log("dsfdf");
	return (
		<Routes>
			<Route path="/" element={<NewsPage />} />
			<Route path="/:category" element={<NewsPage />} />
		</Routes>
	);
};

export default App;
