import "./App.css";
import Accordion from "./components/Accordion/Accordion.jsx";

function App() {

	return(
		<>
			<Accordion
				title="O que é uma Supernova?"
				content="Uma Supernova é um evento astronômico em que ocorre a
				explosão de uma estrela massiva em seus últimos estágios de
				vida. O brilho desse tipo de explosão é comparável ao de uma
				galáxia." />
		</>
	);
}

export default App;
