type PortfolioItemProps = {
	title: string;
	imgURL: string;
	stack: string[];
	link: string;
};

const PortfolioItem = ({ title, imgURL, stack, link }: PortfolioItemProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden cursor-pointer backdrop-blur-md"
		>
			<img
				src={imgURL}
				alt="portfolio"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				<div className="flex flex-row flex-wrap gap-2 items-center justify-start text-xs md:text-sm overflow-hidden">
					{stack.map((item, index) => {
						return (
							<span
								className="inline-block px-2 py-1 dark:text-white font-semibold border-2 border-stone-900 dark:border-white rounded-md"
								key={item + index}
							>
								{item}
							</span>
						);
					})}
				</div>
			</div>
		</a>
	);
};

export default PortfolioItem;
