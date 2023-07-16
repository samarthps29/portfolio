import { useNavigate } from "react-router-dom";
import { UpIcon, DownIcon } from "../data/icons";
import { useEffect } from "react";

type UpDownButtonProps = {
	categories: string[];
	selectedCategory: number;
	setSelectedCategory: (x: number) => void;
};

const UpDownButton = ({
	categories,
	selectedCategory,
	setSelectedCategory,
}: UpDownButtonProps) => {
	useEffect(() => {
		navigate(`${categories[selectedCategory]}`);
	}, [selectedCategory]);

	const navigate = useNavigate();
	return (
		<div className="flex flex-col fixed bottom-6 right-6 z-10 bg-sky-100 dark:bg-orange-300 border border-2 border-stone-900 rounded-md">
			<button
				onClick={() => {
					if (selectedCategory != 0) {
						setSelectedCategory(selectedCategory - 1);
					}
				}}
			>
				<div className="px-1 pt-1.5">
					<UpIcon />
				</div>
			</button>
			<button
				onClick={() => {
					if (selectedCategory != categories.length - 1) {
						setSelectedCategory(selectedCategory + 1);
					}
				}}
			>
				<div className="px-1 pb-1.5">
					<DownIcon />
				</div>
			</button>
		</div>
	);
};

export default UpDownButton;
