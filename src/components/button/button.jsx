import React from 'react';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	align-items: center;
	font-size: 18px;
	height: ${({ height = '32px' }) => height};
	border: ${({ border = '1px solid #000' }) => border};
	border-radius: ${({ radius = '20px' }) => radius};
	background-color: #ff7021;

	&:hover {
		cursor: pointer;
		background-color: #efa57c;
	}
`;
