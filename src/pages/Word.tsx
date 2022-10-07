import { useParams } from 'react-router-dom';
import { Loader, WordDetails, Search } from '../components';
import { wordAPI } from '../redux/wordService';
import { NotFoundPage } from './NotFound';

export const WordPage = () => {
	const { search } = useParams();
	const { data, isLoading, error } = wordAPI.useFetchWordQuery(search?.trim() as string);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <NotFoundPage message="No definitions found" />;
	}

	if (!data) {
		return null;
	}

	return (
		<>
			<Search />
			{data.map((word, index) => (
				<WordDetails details={word} key={index} />
			))}
		</>
	);
};
