/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getGift } from '../../../bff/api';
import { setGift } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import { addProductToBasket } from '../../../bff/api';
import styled from 'styled-components';

const GiftsContainer = ({ className }) => {
	const gift = useSelector((state) => state.gift);
	// eslint-disable-next-line no-unused-vars
	const [basket, setBasket] = useState([]);
	const price = gift.price;
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const idToFind = params.id;
			const giftData = await getGift(idToFind);
			dispatch(setGift(giftData));
		};

		fetchData();
	}, [dispatch]);

	const addToCart = () => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			navigate('/login');
		} else {
			const size = '';
			if (gift && price !== null) {
				addProductToBasket(gift.title, size, price)
					.then((response) => response.json())
					.then((data) => setBasket(data));
			}
		}
	};

	return (
		<div className={className}>
			<Icon
				imageUrl={
					gift && gift.imgUrl
						? require(`../../../${gift.imgUrl.substring(4)}`)
						: ''
				}
				width="300px"
				height="300px"
				radius="20px"
				margin="10px 0 0 0"
			></Icon>
			<H2 margin="10px 0 0 0">{gift ? gift.title : 'Loading...'}</H2>
			<Button onClick={addToCart} radius="5px" border="none" height="84px">
				<div>Добавить в корзину</div> <div>{price} руб.</div>
			</Button>
		</div>
	);
};

export const Gifts = styled(GiftsContainer)`
	padding: 20px;
	margin: 35px auto;
	text-align: center;
	width: 500px;
	height: 500px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 10px;

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		margin-top: 20px;
		color: #430808;
		font-weight: bold;
	}
`;
