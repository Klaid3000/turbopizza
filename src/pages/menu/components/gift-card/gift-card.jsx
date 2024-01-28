/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import styled from 'styled-components';

const GiftCardContainer = ({ className, id, title, imgUrl, price }) => {
	return (
		<div className={className}>
			<Link to={`/menu/gift/${id}`}>
				<Icon
					className="img"
					imageUrl={require(`../../../../${imgUrl.substring(4)}`)}
					width="350px"
					height="350px"
					radius="20px"
					margin="0 0 0 0"
				></Icon>
			</Link>
			<div className="post-card-info">
				<h3>{title}</h3>
				<Button width="116px">{price}руб.</Button>
			</div>
		</div>
	);
};

export const GiftCard = styled(GiftCardContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 350px;
	margin: 40px 0 0 0;
	text-align: center;
`;
