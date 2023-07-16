import { Outlet } from "react-router-dom";
import styles from "../animations/Animations.module.css";

const Animate = ({ theme }: { theme: string }) => {
	const getRandomNumber = () => {
		return Math.floor(Math.random() * 20) + 2;
	};
	return (
		<>
			<div
				className={`${styles.container} flex ${
					theme === "dark" ? "opacity-40" : "opacity-0"
				}`}
			>
				<div className={`${styles.bubbles} text-center -z-100 gap-2`}>
					{Array.from({ length: 50 }, (_, index) => (
						<span
							key={index}
							style={
								{
									"--i": getRandomNumber(),
								} as React.CSSProperties
							}
						/>
					))}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Animate;
