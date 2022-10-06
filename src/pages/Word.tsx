import { useParams } from 'react-router-dom';
import { wordAPI } from '../redux/wordService';

export const WordPage = () => {
	const { search } = useParams();

	const { data, isLoading } = wordAPI.useFetchWordQuery(search as string);
	const word = data && data[0];

	return (
		<>
			{isLoading && <h1 className="text-[60px]">loading</h1>}
			<p>{word?.word}</p>
		</>
	);
};
