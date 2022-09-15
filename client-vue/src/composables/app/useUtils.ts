const useUtils = () => {
	/**
	 * --------------------------------------------------------------------------------
	 * capitalize the first character of a word
	 * --------------------------------------------------------------------------------
	 */
	const wordCapitalize = (string: string): string =>
		string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

	/**
	 * --------------------------------------------------------------------------------
	 * capitalize the first character of every words of a string
	 * --------------------------------------------------------------------------------
	 */
	const stringCapitalize = (string: string): string => {
		var capitalText = '';
		string
			.split(' ')
			.forEach(word => (capitalText += ' ' + stringCapitalize(word)));
		return capitalText.slice(1);
	};

	/**
	 * --------------------------------------------------------------------------------
	 * generate random number
	 * --------------------------------------------------------------------------------
	 */
	const generateRandomNumber = (max: number = 100000): number => {
		return Math.floor(Math.random() * max + 1);
	};

	return {
		wordCapitalize,
		stringCapitalize,
		generateRandomNumber,
	};
};

export default useUtils;
