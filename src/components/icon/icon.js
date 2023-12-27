import styled from 'styled-components';

const IconContainer = ({ className, id }) => <div className={className}></div>;

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
`;
