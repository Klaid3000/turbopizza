/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPizza } from '../../../bff/api';
import { setPizza } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import { addProductToBasket } from '../../../bff/api';
import styled from 'styled-components';

const PizzasContainer = ({ className }) => {
	const [selectedPizza, setSelectedPizza] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [basket, setBasket] = useState([]);
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
				addProductToBasket(pizza.title, selectedPizza, price)
					.then((response) => response.json())
					.then((data) => setBasket(data));
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
				<div className="button-module">
					<Button
						className="classic-size-button"
						onClick={handlePizzaSizeChange}
						value="32sm"
						radius="5px"
						border="none"
					>
						32см
					</Button>
					<Button
						className="small-size-button"
						onClick={handlePizzaSizeChange}
						value="23sm"
						radius="5px"
						border="none"
					>
						23см
					</Button>
				</div>
				<Button onClick={addToCart} radius="5px" border="none" height="60px">
					<div>Добавить в корзину</div>
					<div>{getPrice(selectedPizza)} руб.</div>
				</Button>
			</div>
		</div>
	);
};

export const Pizzas = styled(PizzasContainer)`
	padding: 20px;
	margin: 35px auto;
	text-align: center;
	width: 600px;
	height: 600px;
	background-color: #eee;
	border: 1px solid #fff;
	border-radius: 10px;

	& .button-module {
		display: flex;
		justify-content: center;
	}

	& .ingridients {
		margin: 10px;
		color: #430808;
		font-weight: bold;
	}

	& .classic-size-button {
		display: flex;
		justify-content: center;
		padding: 0px;
		margin: 20px 20px 20px 0;
	}

	& .small-size-button {
		display: flex;
		justify-content: center;
		padding: 0px;
		margin: 20px 0 20px 0;
	}

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		color: #430808;
		font-weight: bold;
	}
`;
