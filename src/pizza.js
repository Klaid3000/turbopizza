import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 88px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

export const Pizza = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/makeyourpizza" element={<div>Составь пиццу сам</div>} />
					<Route path="/menu" element={<div>Меню</div>} />
					<Route
						path="/menu/product/title"
						element={<div>Страница выбранного продукта</div>}
					/>
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/contacts" element={<div>Контакты</div>} />
					<Route path="/basket" element={<div>Корзина</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
};
