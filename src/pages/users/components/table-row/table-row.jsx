import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #000' : 'none')};
	border-radius: 10px;
	& > div {
		display: flex;
		padding: 0 10px;
	}
	& .login-colum {
		width: 172px;
	}
	& .registered-at-colum {
		width: 213px;
	}
	& .role-colum {
		width: auto;
	}
`;
