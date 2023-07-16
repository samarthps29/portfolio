import { useState } from "react";
import { projectItems } from "../data/projects";
import styles from "../styles/loadAnimation.module.css";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

const Portfolio = () => {
	const [intialIndex, setIntitalIndex] = useState(0);
	return (
		<div
			className={`flex flex-col h-screen justify-center items-center gap-12 ${styles.slideInBlur}`}
			id="portfolio"
		>
			<div>
				<Title size={11} id="portfolio" title="Portfolio" />
				<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-4">
					{projectItems.map((project, index) => {
						if (index >= intialIndex && index < intialIndex + 3)
							return (
								<PortfolioItem
									key={project.title + index}
									title={project.title}
									imgURL={project.imgURL}
									stack={project.stack}
									link={project.link}
								/>
							);
					})}
				</div>
				<div className="flex flex-row items-center justify-center gap-2 pt-5">
					<button
						className="px-2 py-1 dark:text-white font-semibold border-2 border-stone-900 dark:border-white rounded-md text-sm"
						onClick={() => {
							setIntitalIndex((prevIndex) => {
								if (prevIndex != 0) return prevIndex - 3;
								else return prevIndex;
							});
						}}
					>
						Prev
					</button>
					<button
						className="px-2 py-1 dark:text-white font-semibold border-2 border-stone-900 dark:border-white rounded-md text-sm"
						onClick={() => {
							setIntitalIndex((prevIndex) => {
								if (prevIndex != projectItems.length - 3)
									return prevIndex + 3;
								else return prevIndex;
							});
						}}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
