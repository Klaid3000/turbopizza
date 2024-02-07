/* eslint-disable no-undef */
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				type="text"
				value={searchPhrase}
				placeholder="Поиск по названию"
				onChange={onChange}
				margin="0"
				radius="10px"
				width="80%"
			></Input>
			<Icon
				imageUrl={require(`../../../../assets/Logo/search.png`)}
				width="24px"
				height="24px"
				margin="8px 57px 0 0"
			></Icon>
			<ul>
				<li>
					<a href="/menu#пиццы">Пиццы</a>
				</li>
				<li>
					<a href="/menu#напитки">Напитки</a>
				</li>
				<li>
					<a href="/menu#подарочные-карты">Подарочные карты</a>
				</li>
			</ul>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	position: fixed;
	width: 300px;
	height: 100%;
	padding: 10px;
	margin: 80px 0 0 30px;

	& > div {
		position: absolute;
		right: 20px;
	}

	& > input {
		padding: 10px 40px 10px 10px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
	}

	a:hover {
		color: #ff5733;
	}
`;
