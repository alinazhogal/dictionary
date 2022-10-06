import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = () => {
	const [word, setWord] = useState<string>('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWord(e.target.value);
	};

	return (
		<div className="flex items-center space-x-3">
			<input
				type="text"
				value={word}
				onChange={onChange}
				className="w-96 h-10 border-blue-400 border-2 rounded-full py-2 px-3 transition duration-150 ease-in-out text-base focus:border-blue-700 focus:outline-none"
			/>
			<Link to={`/${word}`} className="py-2 px-4 bg-blue-500 rounded-full text-white">
				Search
			</Link>
		</div>
	);
};
