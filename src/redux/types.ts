type License = {
	name: string;
	url: string;
};

export type Word = {
	word: string;
	phonetic: string;
	phonetics: {
		text: string;
		audio?: string;
		sourceUrl?: string;
		license?: License;
	}[];
	origin?: string;
	meanings: {
		partOfSpeech: string;
		definitions: {
			definition: string;
			example?: string;
			synonyms: string[];
			antonyms: string[];
		}[];
	}[];
	license?: License;
	sourceUrls?: string[];
};
