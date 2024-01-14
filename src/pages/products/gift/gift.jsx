/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGift } from '../../../bff/api';
import { setGift } from '../../../actions';
import { Button, H2, Icon } from '../../../components';
import styled from 'styled-components';

const GiftsContainer = ({ className }) => {
	const gift = useSelector((state) => state.gift);
	const giftPrice = gift.price;
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const titleToFind = 'Подарочная карта на 30 руб';
			const giftData = await getGift(titleToFind);
			dispatch(setGift(giftData));
		};

		fetchData();
	}, [dispatch]);

	const addToCart = () => {
		if (gift && giftPrice !== null) {
			console.log(`Добавить в корзину: ${gift.title}, Цена: ${giftPrice}`);
		}
	};

	console.log(gift);

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
				<div>Добавить в корзину</div> <div>{giftPrice} руб.</div>
			</Button>
		</div>
	);
};

export const Gifts = styled(GiftsContainer)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	text-align: center;
	align-items: center;
	width: 500px;
	height: 500px;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	button {
		display: flex;
		justify-content: space-between;
		padding: 30px;
		margin-top: 20px;
		color: #430808;
		font-weight: bold;
	}
`;
