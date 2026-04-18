import "./Accordion.css";
import { useState } from "react";

function Accordion({ title, content }) {

	const [isActive, setIsActive] = useState(false);

	function toggleAccordion() {
		setIsActive(!isActive);
	}

	return(
		<div className="accordion">
			<button
				className="accordion-title"
				onClick={toggleAccordion}>
				<span>{title}</span>
				<img
					className="accordion-icon"
					src="/src/assets/icons/chevron-icon.svg"
					alt="Ícone de uma seta"
					width="20px"
					height="20px"/>
			</button>
			<div className={`accordion-content ${isActive ? "active" : ""}`}>
				<p>{content}</p>
			</div>
		</div>
	);
}

export default Accordion;
