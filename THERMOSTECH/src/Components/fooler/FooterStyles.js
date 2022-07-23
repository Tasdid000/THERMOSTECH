import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 50px;
background: #e7e7e7;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin-left: 30px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 10px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
grid-gap: 10px;

@media (max-width: 100px) {
	grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;
margin-left: 10px;
&:hover {
	color: #2969a9;
	transition: 200ms ease-in;
}

`;

export const Heading = styled.p`
font-size: 18px;
color: #2969a9;
margin-bottom: 40px;
font-weight: bold;
`;
