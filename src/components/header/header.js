import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<ControlPanel></ControlPanel>
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0px;
	width: 1380px;
	height: 120px;
	background-color: #ffe9e4;
	box-shadow: 0px -2px 17px #000;
	z-index: 10;
`;
