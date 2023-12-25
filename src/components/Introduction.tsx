import { Name1, Name2 } from "./NameTemplate";
import styles from "../styles/typing.module.css";
import { useState, useEffect } from "react";
import styles1 from "../styles/loadAnimation.module.css";

const Introduction = ({ theme }: { theme: string }) => {
	const [text, setText] = useState("Student");
	const textArr = ["Student", "Developer"];
	const [currIndex, setCurrIndex] = useState(1);

	useEffect(() => {
		setTimeout(() => {
			setText(textArr[currIndex % textArr.length]);
			setCurrIndex(currIndex + 1);
		}, 4000);
	}, [currIndex]);

	return (
		<div
			className="bg-transparent flex flex-col items-start justify-center text-start pb-6 z-10 pl-14 w-10/12 pt-16"
			id="intro"
		>
			<div className="scale-110 pl-4 mb-5">
				{theme != "dark" ? <Name1 /> : <Name2 />}
			</div>

			{/* <p
				className={`text-base md:text-2xl mb-1 font-bold ${styles.text}`}
			>
				Student & Software Developer
			</p> */}
			<div
				className={`${styles.container} text-base md:text-2xl mb-1 font-bold ${styles.text}`}
			>
				{/* <span className={`${styles.first} ${styles.text}`}>I'm a </span> */}
				<span
					className={`${
						theme === "dark"
							? `${styles.first}`
							: `${styles.second}`
					} ${styles.text}`}
				>
					{text}
				</span>
			</div>

			<p className={`text-xl max-w-[60%] font-medium ${styles1.slideIn}`}>
				Hi, I am a student at BIT Mesra in Ranchi, specializing in
				Information Technology. With a genuine ardor for technology, I
				am consistently motivated to expand my knowledge and skills in
				this domain. I find great delight in delving into the
				intricacies of programming, constantly seeking innovative
				solutions to complex problems. While I acknowledge that there is
				always room for growth, I maintain an unwavering commitment to
				continuous improvement. My steadfast belief in the importance of
				effective communication and collaboration drives me to be a
				humble and supportive team member. I am eagerly optimistic about
				the future opportunities that lie ahead and endeavor to make a
				meaningful impact in the realm of software development.
			</p>
		</div>
	);
};

export default Introduction;
