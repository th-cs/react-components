import "./Accordion.css";

function Accordion({ title, content }) {
	function toggleAccordion() {
		const accordionContent =
			document.querySelectorAll(".accordion-content");
		for (let i = 0; i < accordionContent.length; i++) {
			accordionContent[i].classList.toggle("active");
		}
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
			<div className="accordion-content">
				<p>{content}</p>
			</div>
		</div>
	);
}

export default Accordion;
