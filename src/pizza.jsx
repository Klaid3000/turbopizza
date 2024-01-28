import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
	Authorization,
	Drinks,
	Gifts,
	Home,
	Menu,
	Pizzas,
	Registration,
	Users,
} from './pages';
import { setUser } from './actions';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1500px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #aeaeae;
`;

const Page = styled.div`
	margin: 120px 0;
`;

export const Pizza = () => {
	const dispatch = useDispatch();
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

	return (
		<>
			<Header />
			<AppColum>
				<Page>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/makeyourpizza"
							element={<div>Составь пиццу сам</div>}
						/>
						<Route path="/menu" element={<Menu />} />
						<Route path="/menu/pizza/:id" element={<Pizzas />} />
						<Route path="/menu/drink/:id" element={<Drinks />} />
						<Route path="/menu/gift/:id" element={<Gifts />} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />
						<Route
							path="/addpizza"
							element={<div>Добавление новой пиццы</div>}
						/>
						<Route path="/basket" element={<div>Корзина</div>} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Page>
			</AppColum>
			<Footer />
		</>
	);
};
