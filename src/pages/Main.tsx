import { Container, Search } from '../components';

export const MainPage = () => {
	return (
		<Container>
			<h1 className="text-lg font-semibold">Type a word</h1>
			<Search />
		</Container>
	);
};
