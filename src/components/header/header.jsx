import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className, totalCount }) => {
	return (
		<header className={className}>
			<Logo width="250px" height="250px" margin="-48px 0 0 40px" />
			<ControlPanel totalCount={totalCount}></ControlPanel>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0px;
	width: 100%;
	height: 120px;
	// background-color: #ffe9e4;
	background-color: #e8d8f3;
	box-shadow: 0px -2px 17px #000;
	z-index: 10;
`;
