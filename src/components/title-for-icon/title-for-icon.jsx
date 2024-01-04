import styled from 'styled-components';

const TitleForIconContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const TitleForIcon = styled(TitleForIconContainer)`
	text-align: center;
	margin: ${({ margin }) => margin};
`;
