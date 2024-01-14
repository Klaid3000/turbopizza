/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrink } from '../../../bff/api';
import { setDrink } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import styled from 'styled-components';

const DrinksContainer = ({ className }) => {
	const drink = useSelector((state) => state.drink);
	const drinkPrice = drink.price;
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const titleToFind = 'Pepsi 0,33 л';
			const drinkData = await getDrink(titleToFind);
			dispatch(setDrink(drinkData));
		};

		fetchData();
	}, [dispatch]);

	const addToCart = () => {
		if (drink && drinkPrice !== null) {
			console.log(`Добавить в корзину: ${drink.title}, Цена: ${drinkPrice}`);
		}
	};

	console.log(drink);

	return (
		<div className={className}>
			<Icon
				imageUrl={
					drink && drink.imgUrl
						? require(`../../../${drink.imgUrl.substring(4)}`)
						: ''
				}
				width="300px"
				height="300px"
				radius="20px"
				margin="-20px 0 0 0"
			></Icon>
			<H2 margin="10px 0 0 0">{drink ? drink.title : 'Loading...'}</H2>
			<Button onClick={addToCart} radius="5px" border="none" height="84px">
				<div>Добавить в корзину</div> <div>{drinkPrice} руб.</div>
			</Button>
		</div>
	);
};

export const Drinks = styled(DrinksContainer)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	text-align: center;
	align-items: center;
	width: 500px;
	height: 500px;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		margin-top: 20px;
		color: #430808;
		font-weight: bold;
	}
`;
