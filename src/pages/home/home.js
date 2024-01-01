import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon, H2, TitleForIcon } from '../../components';
import { Logo } from '../../components/header/components';

const HomeContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2 margin="80px">Выбери из нашего меню или собери свою пиццу сам!</H2>
			<div className="home-page">
				<Link to="/menu">
					<Icon
						width="400px"
						height="400px"
						imageUrl={require('../../assets/Logo/menu512.png')}
					/>
					<TitleForIcon>Menu</TitleForIcon>
				</Link>
				<Logo width="350px" height="350px" margin="50px 20px 0 20px" />
				<Link to="/makeyourpizza">
					<Icon
						width="400px"
						height="400px"
						imageUrl={require('../../assets/Logo/makepizza.png')}
					/>
					<TitleForIcon>Собери пиццу сам</TitleForIcon>
				</Link>
			</div>
		</div>
	);
};

export const Home = styled(HomeContainer)`
	text-align: center;
	font-size: 25px;

	.home-page {
		display: flex;
		justify-content: space-evenly;
	}

	a {
		text-decoration: none;
		color: #430808;
		font-size: 30px;
		font-weight: bold;
	}

	a:hover {
		color: #c95d5d;
	}
`;
