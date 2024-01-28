/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	margin: ${({ margin = '0 0 10px' }) => margin};
	padding: 10px;
	font-size: 18px;
	border: 1px solid #000;
	border-radius: ${({ radius = '15px' }) => radius};
`;
