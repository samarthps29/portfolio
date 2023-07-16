import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import Scrollbar from "./components/Scrollbar";
import Timeline from "./components/Timeline";
import UpDownButton from "./components/UpDownButton";
import { MoonIcon, SunIcon } from "./data/icons";
import styles from "./styles/divider.module.css";

function App() {
	const [theme, setTheme] = useState("");
	useEffect(() => {
		window.scrollTo(0, 0);
		if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme((theme) => {
			if (theme === "dark") {
				return "light";
			} else {
				return "dark";
			}
		});
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const categories = ["", "portfolio", "timeline", "contact"];
	const location = useLocation();
	const [selectedCategory, setSelectedCategory] = useState(() => {
		if (location.pathname === "/") return 0;
		else if (location.pathname === "/portfolio") return 1;
		else if (location.pathname === "/timeline") return 2;
		else if (location.pathname === "/contact") return 3;
	});

	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className={`fixed z-10 right-6 top-6 p-2 bg-sky-100 dark:bg-orange-300 border-2 border-stone-900 rounded-md`}
			>
				{theme === "dark" ? <SunIcon /> : <MoonIcon />}
			</button>
			<Scrollbar
				selectedCategory={selectedCategory!}
				setSelectedCategory={setSelectedCategory}
				theme={theme}
				categories={categories}
			/>
			<UpDownButton
				categories={categories}
				selectedCategory={selectedCategory!}
				setSelectedCategory={setSelectedCategory}
			/>
			<div
				className={`${
					theme === "dark" ? "bg-stone-900" : "bg-sky-100"
				} text-stone-900 dark:text-stone-300 min-h-screen font-inter`}
			>
				<div
					className={`flex h-screen ${styles.spacer} ${
						theme === "dark" ? styles.layer1 : styles.layer2
					} fixed top-0 right-0`}
				/>
				<div className="relative mx-auto">
					<Routes>
						<Route
							path="/"
							element={<Introduction theme={theme} />}
						/>
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/timeline" element={<Timeline />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
