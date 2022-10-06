import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { wordAPI } from '../redux/wordService';
import { NotFoundPage } from './NotFound';

export const WordPage = () => {
	const { search } = useParams();
	const { data, isLoading, error } = wordAPI.useFetchWordQuery(search as string);

	const word = data && data[0];

	return (
		<>
			{isLoading && <Loader />}
			{error && <NotFoundPage message="No definitions found" />}
			<p>{word?.word}</p>
		</>
	);
};
