import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { WordPage } from './pages/Word';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/:search" element={<WordPage />} />
			</Routes>
		</Router>
	);
};
