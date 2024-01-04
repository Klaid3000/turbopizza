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
		width: ${({ width }) => width};
		height: ${({ height }) => height};
		margin: ${({ margin }) => margin};
		background-image: url(${require('../../../../assets/Logo/Logo.png')});
		background-size: cover;
	}
`;
