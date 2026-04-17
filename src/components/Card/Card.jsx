import {
	CardContainer,
	CardImg,
	CardTitle,
	CardInfo,
	CardInfoTitle,
	CardLink } from "./CardStyle.jsx";

function Card({ image, altText, title, description, type, moons, link }) {

	return (
		<article>
			<CardContainer>
				<CardImg
					src={image}
					alt={altText} />
				<CardTitle>{title}</CardTitle>
				<CardInfo>
					<CardInfoTitle>Descrição: </CardInfoTitle>
					{description}
				</CardInfo>
				<CardInfo>
					<CardInfoTitle>Tipo: </CardInfoTitle>
					{type}
				</CardInfo>
				<CardInfo>
					<CardInfoTitle>Quantidade de Luas: </CardInfoTitle>
					{moons}
				</CardInfo>
				<CardLink
					href={link}
					target="_blank">Mais informações</CardLink>
			</CardContainer>
		</article>
	);
}

export default Card;
