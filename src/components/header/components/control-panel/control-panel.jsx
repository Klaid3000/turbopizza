/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, TitleForIcon } from '../../../index';
import { ROLE } from '../../../../constants';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 25px 0 20px 0;
`;

const ControlPanelContainer = ({ className, totalCount }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAligned>
				<Link to="/menu">
					<Icon imageUrl={require('../../../../assets/Logo/menu.png')} />
					<TitleForIcon>Menu</TitleForIcon>
				</Link>
				<Link to="/makeyourpizza">
					<Icon
						margin="0 60px"
						imageUrl={require('../../../../assets/Logo/pizza.png')}
					/>
					<TitleForIcon>Собери пиццу сам</TitleForIcon>
				</Link>
				<Link to="/addpizza">
					<Icon
						margin="0 105px"
						imageUrl={require('../../../../assets/Logo/pizza-boxes.png')}
					/>
					<TitleForIcon margin="0 0 0 20px">
						Добавление новой пиццы
					</TitleForIcon>
				</Link>
				<Link to="/users">
					<Icon
						width="45px"
						height="45px"
						margin="0 50px"
						imageUrl={require('../../../../assets/Logo/users-color.png')}
						filter="hue-rotate(250deg)"
					/>
					<TitleForIcon margin="0 20px 5px 20px">Пользователи</TitleForIcon>
				</Link>
				{roleId === ROLE.GUEST ? (
					<Link to="/login">
						<Icon
							imageUrl={require('../../../../assets/Logo/user-green.png')}
							filter="hue-rotate(250deg)"
							border="1px solid #000"
							radius="50%"
						/>
						<TitleForIcon>Войти</TitleForIcon>
					</Link>
				) : (
					<Link>
						<Icon
							onClick={onLogout}
							imageUrl={require('../../../../assets/Logo/logout.png')}
							filter="hue-rotate(45deg)"
							border="1px solid #000"
							radius="50%"
						/>
						<TitleForIcon onClick={() => dispatch(logout(session))}>
							{login}
						</TitleForIcon>
					</Link>
				)}
				<Link to="/basket">
					<Icon
						margin="0 90px 0 30px"
						imageUrl={require('../../../../assets/Logo/basket.png')}
					/>
					<TitleForIcon margin="0 90px 0 20px">Корзина</TitleForIcon>
					<p>{totalCount}</p>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	justify-content: space-between;

	a {
		text-decoration: none;
		color: #430808;
		font-weight: bold;
	}

	a:hover {
		color: #ff5733;
	}

	p {
		position: absolute;
		top: 78px;
		right: 118px;
	}
`;
