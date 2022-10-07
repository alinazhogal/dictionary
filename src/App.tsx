import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Header, Footer } from './components';
import { WordPage, NotFoundPage, MainPage } from './pages';

export const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/:search" element={<WordPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
};
