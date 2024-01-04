import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Home, Registration, Users } from './pages';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	min-height: 100%;
	margin: 0 auto;
	background-color: #f7ffa9;
`;

const Page = styled.div`
	padding: 150px 0;
`;

export const Pizza = () => {
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
						<Route path="/menu" element={<div>Меню</div>} />
						<Route
							path="/menu/product/title"
							element={<div>Страница выбранного продукта</div>}
						/>
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
