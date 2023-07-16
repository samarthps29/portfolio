type TitleProps = {
	id: string;
	title: string;
	size: number;
};

const Title = ({ id, title, size }: TitleProps) => {
	const determineSize = (size: number) => {
		if (size < 10) return "text-xl";
		else if (size > 10 && size < 20) return "text-2xl";
		else if (size > 20 && size < 30) return "text-3xl";
		else if (size > 30 && size < 40) return "text-4xl";
		else if (size > 40 && size < 50) return "text-5xl";
		else if (size > 50 && size < 60) return "text-6xl";
		else if (size > 60 && size < 70) return "text-7xl";
		else if (size > 70 && size < 80) return "text-8xl";
		else return "text-9xl";
	};
	return (
		<h1
			className={`${determineSize(
				size
			)} font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white`}
			id={id}
		>
			{title}
		</h1>
	);
};

export default Title;
