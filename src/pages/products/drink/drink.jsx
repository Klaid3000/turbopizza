/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrink } from '../../../bff/api';
import { setDrink } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import { addProductToBasket } from '../../../bff/api';
import styled from 'styled-components';

const DrinksContainer = ({ className }) => {
	// eslint-disable-next-line no-unused-vars
	const [basket, setBasket] = useState([]);
	const drink = useSelector((state) => state.drink);
	const price = drink.price;
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const idToFind = params.id;
			const drinkData = await getDrink(idToFind);
			dispatch(setDrink(drinkData));
		};

		fetchData();
	}, [dispatch]);

	const addToCart = () => {
		const size = '';
		if (drink && price !== null) {
			addProductToBasket(drink.title, size, price)
				.then((response) => response.json())
				.then((data) => setBasket(data));
		}
	};

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
				margin="10px 0 0 0"
			></Icon>
			<H2 margin="10px 0 0 0">{drink ? drink.title : 'Loading...'}</H2>
			<Button onClick={addToCart} radius="5px" border="none" height="84px">
				<div>Добавить в корзину</div> <div>{price} руб.</div>
			</Button>
		</div>
	);
};

export const Drinks = styled(DrinksContainer)`
	padding: 20px;
	margin: 35px auto;
	text-align: center;
	width: 500px;
	height: 500px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 10px;

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		margin-top: 20px;
		color: #430808;
		font-weight: bold;
	}
`;
