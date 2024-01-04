import { useEffect, useState } from 'react';
import { Icon } from '../index';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&lang=ru&appid=7df69c324910bca5e6454347149cd33d',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Контакты:</div>
				<div>+420 777 777 777</div>
				<div>info@turbo-pizza.com</div>
			</div>
			<div>
				<div>Соцсети:</div>
				<Icon
					width="20px"
					height="20px"
					margin="20px"
					imageUrl={require('../../assets/Logo/facebook.png')}
					cursor="pointer"
					onClick={() => {
						window.open('https://www.facebook.com/', '_blank');
					}}
				/>
				<Icon
					width="20px"
					height="20px"
					margin="20px"
					imageUrl={require('../../assets/Logo/instagram.png')}
					cursor="pointer"
					onClick={() => {
						window.open('https://www.instagram.com/', '_blank');
					}}
				/>
				<Icon
					width="20px"
					height="20px"
					margin="20px"
					imageUrl={require('../../assets/Logo/telegram.png')}
					cursor="pointer"
					onClick={() => {
						window.open('https://web.telegram.org/', '_blank');
					}}
				/>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</div>
				<div className="weather">
					{temperature} градусa(ов), {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: 20px 70px;
	color: #430808;
	font-weight: bold;
	background-color: #ffe9e4;
	box-shadow: 0px 2px 17px #000;

	& .weather {
		margin-bottom: 10px;
	}
`;
