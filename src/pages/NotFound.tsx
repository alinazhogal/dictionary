import { Link } from 'react-router-dom';

type Props = {
	message?: string;
};

export const NotFoundPage = ({ message = 'Page not found' }: Props) => {
	return (
		<>
			<h1 className="text-2xl font-medium">{message} :(</h1>
			<Link
				to={'/'}
				className="py-2.5 px-4 bg-blue-500 rounded-full text-white  transition ease-in-out hover:bg-blue-700"
			>
				Return to main page
			</Link>
		</>
	);
};
