import TimelineItem from "./TimelineItem";
import { timelineItems } from "../data/timeline";
import Title from "./Title";
import styles from "../styles/loadAnimation.module.css";

const Timeline = () => {
	return (
		<div
			className={`flex flex-col items-center justify-center ${styles.slideIn}`}
			id="timeline"
		>
			<div className="w-1/2 md:w-8/12 py-20">
				<Title size={11} id="timeline" title="Timeline" />
				{timelineItems.map((item, index) => {
					return (
						<TimelineItem
							key={item.title + index}
							year={item.year}
							title={item.title}
							duration={item.duration}
							details={item.details}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Timeline;
