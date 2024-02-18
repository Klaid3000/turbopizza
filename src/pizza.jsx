import { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import {
	Authorization,
	Basket,
	Drinks,
	Gifts,
	Home,
	Menu,
	Pizzas,
	Registration,
	Users,
} from './pages';
import { setUser } from './actions';
import { addProductToBasket, getBasket, deleteProductFromBasket } from './bff/api';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 100%;
	min-height: 100%;
	margin: 0 auto;
	// background-color: #aeaeae;
`;

const Page = styled.div`
	margin: 120px 0;
`;

export const Pizza = () => {
	const dispatch = useDispatch();
	const [basket, setBasket] = useState([]);
	const [basketChanged, setBasketChanged] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	const handleRemoveItem = (productId) => {
		deleteProductFromBasket(productId)
			.then((response) => {
				if (response.ok) {
					setBasketChanged((prev) => !prev);
				} else {
					console.error(
						'Error removing item from basket:',
						response.statusText,
					);
				}
			})
			.catch((error) => {
				console.error('Error removing item from basket:', error);
			});
	};

	const addToBasket = ({ title, size, price }) => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			navigate('/login');
		} else {
			addProductToBasket(title, size, price)
				.then((response) => response.json())
				.then((data) => {
					setBasketChanged((prev) => !prev);
					setBasket(data);
				})
				.catch((error) => console.error('Error adding item to basket:', error));
		}
	};

	useEffect(() => {
		getBasket().then((data) => {
			setBasket(data);
			calculateTotalPrice(data);
			calculateTotalCount(data);
		});
	}, [basketChanged]);

	const calculateTotalPrice = (basketItems) => {
		const total = basketItems.reduce((sum, item) => sum + item.price, 0);
		setTotalPrice(total);
	};

	const calculateTotalCount = (basketItems) => {
		const total = basketItems.length;
		setTotalCount(total);
	};

	return (
		<>
			<Header totalCount={totalCount} />
			<AppColum>
				<Page>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/menu"
							element={<Menu addToBasket={addToBasket} />}
						/>
						<Route
							path="/makeyourpizza"
							element={<div>Составь пиццу сам</div>}
						/>
						<Route path="/addpizza" element={<Pizzas />} />
						<Route path="/menu/pizza/:id" element={<Pizzas />} />
						<Route path="/menu/drink/:id" element={<Drinks />} />
						<Route path="/menu/gift/:id" element={<Gifts />} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />
						<Route
							path="/basket"
							element={
								<Basket
									totalPrice={totalPrice}
									handleRemoveItem={handleRemoveItem}
									basket={basket}
								/>
							}
						/>
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Page>
			</AppColum>
			<Footer />
			<Modal />
		</>
	);
};
