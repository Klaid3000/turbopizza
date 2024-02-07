/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { H2 } from '../../components';
import { DrinkCard, GiftCard, PizzaCard, Search } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MenuContainer = ({ className, addToBasket }) => {
	const [pizzas, setPizzas] = useState([]);
	const [drinks, setDrinks] = useState([]);
	const [gifts, setGifts] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([
			requestServer('fetchPizzas', searchPhrase),
			requestServer('fetchDrinks', searchPhrase),
			requestServer('fetchGifts', searchPhrase),
		]).then(([pizzasRes, drinksRes, giftsRes]) => {
			setPizzas(pizzasRes.res);
			setDrinks(drinksRes.res);
			setGifts(giftsRes.res);
		});
	}, [requestServer, shouldSearch]);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		setShouldSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			{/* <div className="image">
				<Icon
					imageUrl={require(`../../assets/Background/background.png`)}
					width="1903px"
					height="155px"
					margin="0 0 0 0"
				></Icon>
			</div> */}
			<Search searchPhrase={searchPhrase} onChange={onSearch} />
			<div className="product-block">
				<div id="пиццы"></div>
				<H2 margin="80px 0 0 40px">Пиццы</H2>
				{pizzas.length ? (
					<div className="product-list">
						{pizzas.map(({ id, title, imgUrl, ingredients, price }) => (
							<PizzaCard
								key={id}
								id={id}
								title={title}
								imgUrl={imgUrl}
								ingredients={ingredients}
								price={price}
								addToBasket={addToBasket}
							/>
						))}
					</div>
				) : (
					<div className="no-product-found">Совпадений не найдено</div>
				)}
				<div id="напитки"></div>
				<H2 margin="150px 0 0 40px">Напитки</H2>
				{drinks.length ? (
					<div className="product-list">
						{drinks.map(({ id, title, imgUrl, price }) => (
							<DrinkCard
								key={id}
								id={id}
								title={title}
								imgUrl={imgUrl}
								price={price}
								addToBasket={addToBasket}
							/>
						))}
					</div>
				) : (
					<div className="no-product-found">Совпадений не найдено</div>
				)}
				<div id="подарочные-карты"></div>
				<H2 margin="150px 0 0 40px">Подарочные карты</H2>
				{gifts.length ? (
					<div className="product-list">
						{gifts.map(({ id, title, imgUrl, price }) => (
							<GiftCard
								key={id}
								id={id}
								title={title}
								imgUrl={imgUrl}
								price={price}
								addToBasket={addToBasket}
							/>
						))}
					</div>
				) : (
					<div className="no-product-found">Совпадений не найдено</div>
				)}
			</div>
		</div>
	);
};

export const Menu = styled(MenuContainer)`
	display: flex;
	justify-content: space-between;

	.product-block {
		width: 100%;
		margin-left: 300px;
	}

	.image {
		position: absolute;
	}

	.product-list {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: space-between;
		padding: 20px 40px;
		border-bottom: 1px solid #ddd;
	}

	.no-product-found {
		padding: 20px 40px;
		color: #333;
		font-weight: bold;
		text-size: 18px;
		border-bottom: 1px solid #ddd;
	}
`;
