/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PizzaCardContainer = ({ className, id, title, imgUrl, price, addToBasket }) => {
	const addToBasketClassicSize = () => {
		const size = '32sm';
		const classicPrice = price[size];
		addToBasket({ title, size, price: classicPrice });
	};

	const addToBasketSmallSize = () => {
		const size = '23sm';
		const smallPrice = price[size];
		addToBasket({ title, size, price: smallPrice });
	};

	return (
		<div className={className}>
			<Link to={`/menu/pizza/${id}`}>
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
				<div className="button-group">
					<button
						className="classic-size-button"
						onClick={addToBasketClassicSize}
					>
						<div>Классическая 32см</div>
						{price['32sm']}руб.
					</button>
					<button className="small-size-button" onClick={addToBasketSmallSize}>
						<div>Маленькая 23см</div>
						{price['23sm']}руб.
					</button>
				</div>
			</div>
		</div>
	);
};

export const PizzaCard = styled(PizzaCardContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 350px;
	margin: 40px 0 0 0;

	& .button-group {
		display: grid;
		grid-auto-rows: 1fr;
		grid-gap: 1px;
		gap: 1px;
		margin-top: 20px;
	}

	&. top {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	button {
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		width: 100%;
		align-items: center;
		font-size: 15px;
		height: 40px;
		border: 1px solid #000;
		background-color: #ff7021;

		&:hover {
			cursor: pointer;
			background-color: #efa57c;
		}
	}

	& .classic-size-button {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	& .small-size-button {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`;
