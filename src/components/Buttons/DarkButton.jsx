import styles from "./DarkButton.module.css";

function DarkButton({ icon, altText, content }) {
	return (
		<button className={styles.button}>
			<img
				className={styles.buttonImg}
				src={icon}
				alt={altText}/>
			<span className={styles.buttonSpan}>{content}</span>
		</button>
	);
}

export default DarkButton;
