import { Word } from '../../redux/types';
import { Audio } from '../../icons';
import styles from './WordDetails.module.css';

type Props = {
	details: Word;
};

export const WordDetails = ({ details }: Props) => {
	const audio = document.querySelector('audio');

	async function toggleAudio() {
		if (!audio) return;
		await audio.play();
	}

	return (
		<section className="w-full flex flex-col space-y-5">
			<div className="flex items-end space-x-4">
				<h1 className="text-3xl font-semibold">{details.word}</h1>
				<p>{details.phonetic}</p>
			</div>
			{details.phonetics.length !== 0 && (
				<div className={styles.blockCol}>
					<p className={styles.heading}>Pronunciation</p>
					{details.phonetics.map((item, index) => (
						<div key={index} className={styles.blockRow}>
							<button onClick={toggleAudio} className={item.audio ? '' : 'pointer-events-none'}>
								<Audio className={item.audio ? 'fill-blue-600' : 'fill-gray-400'} />
							</button>
							<audio src={item.audio}>Your browser does not support the audio element.</audio>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			)}
			<div className={styles.blockCol}>
				{details.meanings.map((item, index) => (
					<div key={index} className={styles.definitions}>
						<div>
							<span className={styles.heading}>Part of speech: </span>
							<span>{item.partOfSpeech}</span>
						</div>
						<div className={styles.blockCol}>
							<p className={styles.heading}>Definitions</p>
							<ul className={styles.list}>
								{item.definitions.map((def, index) => (
									<li key={index}>
										<div className="flex items-start space-x-2">
											<p className="max-w-[17px] w-full">{index + 1}</p>
											<div>
												<p>{def.definition}</p>
												{def.example && (
													<p>
														<span className={styles.subHeading}>Example: </span>
														{def.example}
													</p>
												)}
												{def.synonyms.length !== 0 && (
													<p>
														<span className={styles.subHeading}>Synonims: </span>
														{def.synonyms.join(', ')}
													</p>
												)}
												{def.antonyms.length !== 0 && (
													<p>
														<span className={styles.subHeading}>Antonyms: </span>
														{def.antonyms.join(', ')}
													</p>
												)}
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{details.origin && (
				<div className={styles.blockCol}>
					<p className={styles.heading}>Origin</p>
					<p>{details.origin}</p>
				</div>
			)}
			<div className={styles.blockCol}>
				<p className={styles.heading}>Source urls</p>
				<div className={styles.list}>
					{details.sourceUrls?.map((i) => (
						<a className="block underline transition hover:text-blue-500" href={i} key={i}>
							{i}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
