import styled from 'styled-components';

const IconContainer = ({ className, onClick }) => (
	<div className={className} onClick={onClick}></div>
);

export const Icon = styled(IconContainer)`
	display: inline-block;
	width: ${({ width = '40px' }) => width};
	height: ${({ height = '40px' }) => height};
	margin: ${({ margin = '0 20px' }) => margin};
	background-image: url(${({ imageUrl }) => imageUrl});
	background-size: cover;
	filter: ${({ filter }) => filter};
	border: ${({ border }) => border};
	border-radius: ${({ radius }) => radius};
	cursor: ${({ cursor }) => cursor};
`;
