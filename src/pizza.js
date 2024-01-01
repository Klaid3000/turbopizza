import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration } from './pages';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1400px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #ddd;
`;

const Content = styled.div`
	padding: 120px 0;
`;

export const Pizza = () => {
	return (
		<>
			<Header />
			<AppColum>
				<Content>
					<Routes>
						<Route path="/" element={<div>Главная страница</div>} />
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
						<Route path="/users" element={<div>Пользователи</div>} />
						<Route
							path="/addpizza"
							element={<div>Добавление новой пиццы</div>}
						/>
						<Route path="/contacts" element={<div>Контакты</div>} />
						<Route path="/basket" element={<div>Корзина</div>} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Content>
			</AppColum>
			<Footer />
		</>
	);
};
