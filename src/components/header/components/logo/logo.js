import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = ({ className }) => (
	<div className={className}>
		<Link to="/"></Link>
	</div>
);

export const Logo = styled(LogoContainer)`
	a {
		display: inline-block;
		width: 300px;
		height: 300px;
		margin: -68px 0 0 40px;
		background-image: url(${require('../../../../assets/Logo/Logo.png')});
		background-size: cover;
	}
`;
