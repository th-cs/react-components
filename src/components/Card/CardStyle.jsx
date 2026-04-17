// styled-components
import { styled } from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 12px;
	gap: 12px;
	width: 25%;
	max-width: 280px;
	border-radius: 10px;
	border: 1px dashed #4A4A4A;
`;

export const CardImg = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
`;

export const CardTitle = styled.h1`
	font-size: 20px;
`;

export const CardInfo = styled.p`
	align-self: flex-start;
	font-size: 16px;
`;

export const CardInfoTitle = styled.span`
	font-weight: 700;
	font-size: 16px;
`;

export const CardLink = styled.a`
	align-self: flex-end;
	padding: 10px 12px;
	font-size: 14px;
	color: #F4DADA;
	background-color: #BD344B;
	border-radius: 10px;
	transition: background-color 0.2s linear;

	&:hover {
		background-color: #8F2839;
	}
`;
