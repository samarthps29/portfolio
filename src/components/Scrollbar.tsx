import { Link } from "react-router-dom";

type ScrollbarProps = {
	categories: string[];
	theme: string;
	selectedCategory: number;
	setSelectedCategory: (x: number) => void;
};

const Scrollbar = ({
	categories,
	theme,
	selectedCategory,
	setSelectedCategory,
}: ScrollbarProps) => {
	return (
		<div
			className={`flex fixed px-2 py-2.5 z-10 right-6 top-20 bg-sky-100 dark:bg-orange-300 rounded-md -my-1.5 border-2 border-stone-900
			}`}
		>
			<div className="flex flex-col w-2 justify-center items-center gap-2">
				{categories.map((item, index) => {
					return (
						<Link
							key={item}
							to={`/${item}`}
							onClick={() => setSelectedCategory(index)}
						>
							<div
								className={`h-2 w-2 rounded-full bg-transparent border-2 border-stone-900 ${
									index === selectedCategory
										? theme === "dark"
											? "bg-white"
											: "bg-black"
										: "bg-transparent"
								}`}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Scrollbar;
