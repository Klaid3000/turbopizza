import styled from 'styled-components';
import background from './assets/Background/background.png';

const Div = styled.div`
	text-align: center;
	background: url(${background});
	background-size: cover;
	backgroun-position: center;
	height: 900px;
`;

export const App = () => {
	return (
		<Div>
			<div>123456</div>
		</Div>
	);
};
