import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
			</Routes>
		</Router>
	);
};
