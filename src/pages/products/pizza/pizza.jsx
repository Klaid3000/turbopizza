/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPizza } from '../../../bff/api';
import { setPizza } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import styled from 'styled-components';

const PizzasContainer = ({ className }) => {
	const [selectedPizza, setSelectedPizza] = useState('');
	const pizza = useSelector((state) => state.pizza);
	const dispatch = useDispatch();
	const params = useParams();

	const handlePizzaSizeChange = (event) => {
		setSelectedPizza(event.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const idToFind = params.id;
			const pizzaData = await getPizza(idToFind);
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
			<div className="overlay"></div>
			<div className="box">
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
				<select className="select-size" onChange={handlePizzaSizeChange}>
					<option value="">Выберите размер пиццы</option>
					<option value="32sm">32см</option>
					<option value="23sm">23см</option>
				</select>
				<Button onClick={addToCart} radius="5px" border="none" height="60px">
					<div>Добавить в корзину</div>
					<div>{getPrice(selectedPizza)} руб.</div>
				</Button>
			</div>
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

	// position: fixed;
	// top: 0;
	// right: 0;
	// bottom: 0;
	// left: 0;
	// z-index: 20;

	// & .overlay {
	// 	position: absolute;
	// 	width: 100%;
	// 	height: 100%;
	// 	background-color: rgba(0, 0, 0, 0.5);
	// }

	// & .box {
	// 	position: relative;
	// 	width: 600px;
	// 	margin: auto;
	// 	padding: 0 20px 20px;
	// 	text-align: center;
	// 	top: 50%;
	// 	transform: translate(0, -50%);
	// 	background-color: #fff;
	// 	border: 1px solid #000;
	// 	z-index: 30;
	// }

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
		background-color: #fff;
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
