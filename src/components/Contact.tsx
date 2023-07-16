import Title from "./Title";
import styles from "../styles/loadAnimation.module.css";
import { LinkedInIcon, TwitterIcon } from "../data/icons";

const Contact = () => {
	return (
		<div
			className="flex flex-col h-screen justify-center mx-auto static"
			id="contact"
		>
			<div className={`flex flex-col items-center ${styles.slideIn}`}>
				<form
					action="https://getform.io/f/f88668a4-0163-4d1f-aa84-e621a9596d8b"
					method="POST"
					className="flex flex-col w-1/2 md:w-7/12"
				>
					<Title size={11} id="contact" title="Contact" />
					<input
						type="text"
						name="name"
						placeholder="Name"
						minLength={3}
						maxLength={30}
						required
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-800 dark:border-stone-200"
					></input>
					<input
						type="text"
						name="email"
						placeholder="Email"
						pattern=".+@+.+\.com"
						maxLength={30}
						title="Please provide a valid email address"
						required
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-800 dark:border-stone-200"
					></input>
					<textarea
						name="message"
						placeholder="Message"
						rows={10}
						required
						className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-stone-800 dark:border-stone-200"
					></textarea>
					<button
						type="submit"
						className="text-center inline-block px-4 py-2 md:px-8 md:py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-rb from-[#609966] to-[#4b6c5b] dark: bg-gradient-to-r dark:from-purple-400 dark:to-indigo-600 drop-shadow-md"
					>
						Work With Me
					</button>
				</form>
			</div>

			<div
				className={`fixed bottom-11 right-0 left-0 flex flex-row gap-1.5 justify-center`}
			>
				<div className="grid grid-cols-2 border border-2 border-stone-600 dark:border-stone-300 rounded-md p-0.5">
					<div className="w-7 h-7 bg-transparent rounded-full p-1.5">
						<a
							href="https://twitter.com/samarth_ps"
							target="_blank"
						>
							<TwitterIcon h="4" w="4" />
						</a>
					</div>
					<div className="w-7 h-7 bg-transparent rounded-full p-1.5">
						<a
							href="https://www.linkedin.com/in/samarth-pratap-singh-521558166/"
							target="_blank"
						>
							<LinkedInIcon h="4" w="4" />
						</a>
					</div>
				</div>
			</div>

			<div className="fixed bottom-2 left-0 right-0 text-center pb-1">
				<p className="text-sm text-stone-600 dark:text-stone-500">
					&copy; {new Date().getFullYear()} Sam. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Contact;
