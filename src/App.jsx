import "./App.css";
import Accordion from "./components/Accordion/Accordion.jsx";
import Card from "./components/Card/Card.jsx";
import saturnImg from "./assets/images/saturn-img.jpg"

function App() {
	return(
		<main>
			<h1>React Components</h1>
			<section className="component">
				<h2>Accordion com CSS puro</h2>
				<Accordion
					title="O que é uma Supernova?"
					content="Uma Supernova é um evento astronômico em que
					ocorre a explosão de uma estrela massiva em seus últimos
					estágios de vida. O brilho desse tipo de explosão é
					comparável ao de uma galáxia." />
			</section>
			<section className="component">
				<h2>Card com styled-components</h2>
				<Card
					image={saturnImg}
					altText="Composição fotográfica de Saturno"
					title="Saturno"
					description="Saturno é um planeta do sistema solar e o
					sexto a partir do Sol. Possui anéis ao seu redor que podem
					ser vistos da Terra com um telescópio."
					type="Gigante gasoso"
					moons="292"
					link="https://en.wikipedia.org/wiki/Saturn"/>
			</section>
		</main>
	);
}

export default App;
