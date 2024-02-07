import { useNavigate } from 'react-router-dom';
import { Button, H2 } from '../../components';
import styled from 'styled-components';

const BasketContainer = ({ className, totalPrice, handleRemoveItem, basket }) => {
	const navigate = useNavigate();

	const toggleBasket = () => {
		navigate(-1);
	};

	return (
		<div className={className}>
			<div className="header-container">
				<H2>Корзина</H2>
				<Button
					className="close-button"
					border="none"
					onClick={() => toggleBasket()}
					radius="50%"
					width="40px"
				>
					X
				</Button>
			</div>
			{basket.length ? (
				<ul>
					{basket.map((item) => (
						<li key={item.id}>
							{item.title} {item.size} {item.price}руб.
							<Button
								width="150px"
								border="none"
								onClick={() => handleRemoveItem(item.id)}
							>
								Удалить
							</Button>
						</li>
					))}
				</ul>
			) : (
				<div className="no-product-found">Товаров не найдено</div>
			)}
			<Button width="500px" border="none" margin="20px 0 0 0">
				Общая сумма: {totalPrice}руб.
			</Button>
		</div>
	);
};

export const Basket = styled(BasketContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 500px;
	margin: auto;

	h2 {
		text-align: center;
	}

	ul {
		padding: 0;
	}

	li {
		margin: 10px;
		padding: 10px;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-container {
		position: relative;
	}

	.close-button {
		position: absolute;
		top: 35px;
		right: 0;
	}

	.no-product-found {
		text-align: center;
		color: #333;
		margin: 20px 0;
		font-weight: bold;
		text-size: 18px;
	}
`;
