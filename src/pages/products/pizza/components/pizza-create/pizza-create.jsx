import { useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../../hooks';
import { Button, Input } from '../../../../../components';
import { savePizzaAsync } from '../../../../../actions';
import styled from 'styled-components';

const PizzaCreateContainer = ({
	className,
	pizza: { id, title, imageUrl, ingredients, price },
}) => {
	const [idValue, setIdValue] = useState('');
	const [imageUrlValue, setImageUrlValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [ingredientsValue, setIngredientsValue] = useState('');
	const [priceValue, setPriceValue] = useState('');

	useLayoutEffect(() => {
		setIdValue('');
		setImageUrlValue('');
		setTitleValue('');
		setIngredientsValue('');
		setPriceValue('');
	}, [id, imageUrl, title, ingredients, price]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		dispatch(
			savePizzaAsync(requestServer, {
				id: idValue,
				title: titleValue,
				imageUrl: imageUrlValue,
				ingredients: ingredientsValue,
				price: {
					'32sm': parseFloat(priceValue),
					'23sm': parseFloat(priceValue) - 8,
				},
			}),
		).then(({ id }) => navigate(`/menu/pizza/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value.trim());
	const onTitleChange = ({ target }) => setTitleValue(target.value.trim());
	const onIngredientsChange = ({ target }) => setIngredientsValue(target.value.trim());
	const onPriceChange = ({ target }) => {
		const inputValue = target.value;
		if (/^\d*\.?\d*$/.test(inputValue)) {
			setPriceValue(inputValue.trim());
		}
	};
	return (
		<div className={className}>
			<Input
				value={titleValue}
				placeholder="Название пиццы..."
				onChange={onTitleChange}
			/>
			<Input
				value={imageUrlValue}
				placeholder="Ссылка на изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={ingredientsValue}
				placeholder="Ингредиенты..."
				onChange={onIngredientsChange}
			/>
			<Input
				value={priceValue}
				placeholder="Укажите цену пиццы 32 см"
				onChange={onPriceChange}
			/>
			<Button onClick={onSave}>Save</Button>
		</div>
	);
};

export const PizzaCreate = styled(PizzaCreateContainer)`
	align-items: center;
`;
