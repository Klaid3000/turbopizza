/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPizza } from '../../../bff/api';
import { setPizza } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import styled from 'styled-components';

const PizzasContainer = ({ className }) => {
	const [selectedPizza, setSelectedPizza] = useState('');
	const pizza = useSelector((state) => state.pizza);
	const dispatch = useDispatch();

	const handlePizzaChange = (event) => {
		setSelectedPizza(event.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const titleToFind = 'Пицца Napoli';
			const pizzaData = await getPizza(titleToFind);
			dispatch(setPizza(pizzaData));
		};

		fetchData();
	}, [dispatch]);

	const getPrice = (size) => {
		if (pizza && pizza.price && pizza.price[size]) {
			return pizza.price[size];
		}
		return 0;
	};

	const addToCart = () => {
		if (selectedPizza) {
			const price = getPrice(selectedPizza);
			if (price !== null) {
				console.log(`Добавить в корзину: ${selectedPizza}, Цена: ${price}`);
			}
		}
	};

	return (
		<div className={className}>
			<Icon
				imageUrl={
					pizza && pizza.imgUrl
						? require(`../../../${pizza.imgUrl.substring(4)}`)
						: ''
				}
				width="300px"
				height="300px"
				radius="20px"
				margin="10px 0 0 0"
			></Icon>
			<H2 margin="10px 0 0 0">{pizza ? pizza.title : 'Loading...'}</H2>
			<div className="ingridients">Состав: {pizza.ingredients}</div>
			<select className="select-size" onChange={handlePizzaChange}>
				<option value="">Выберите размер пиццы</option>
				<option value="32sm">32см</option>
				<option value="23sm">23см</option>
			</select>
			<Button onClick={addToCart} radius="5px" border="none" height="60px">
				<div>Добавить в корзину</div>
				<div>{getPrice(selectedPizza)} руб.</div>
			</Button>
		</div>
	);
};

export const Pizzas = styled(PizzasContainer)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	text-align: center;
	align-items: center;
	width: 600px;
	height: 600px;
	background-color: #e8d8f3;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .ingridients {
		margin: 10px;
		color: #430808;
		font-weight: bold;
	}

	select {
		width: 50%;
		padding: 10px;
		font-size: 16px;
		color: #430808;
		font-weight: bold;
		border: 1px solid #430808;
		border-radius: 5px;
		background-color: bisque;
		cursor: pointer;
	}

	select option {
		text-align: center;
		padding: 10px;
		background-color: bisque;
		border-bottom: 1px solid #ddd;
	}

	select option:hover {
		background-color: #ddd;
	}

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		margin-top: 20px;
		color: #430808;
		font-weight: bold;
	}
`;
