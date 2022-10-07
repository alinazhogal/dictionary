import { Word } from '../../redux/types';
import styles from './WordDetails.module.css';

type Props = {
	details: Word;
};

export const WordDetails = ({ details }: Props) => {
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
							<audio controls src={item.audio}>
								<p>
									Your browser does not support the audio element. You can download it
									<a href={item.audio}> here</a>
								</p>
							</audio>
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
						<a
							className="block break-words underline transition hover:text-blue-500"
							href={i}
							key={i}
						>
							{i}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
