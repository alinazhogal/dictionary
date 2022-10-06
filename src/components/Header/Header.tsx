import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="flex space-x-4 h-16 bg-blue-500 absolute w-full text-white items-center justify-center">
			<nav className="max-w-5xl px-4 font-semibold text-xl w-full">
				<Link to="/">Dictionary</Link>
			</nav>
		</header>
	);
};
