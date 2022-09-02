const useUtils = () => {
	// capitalize first character of a string
	const wordCapitalize = (string: string): string =>
		string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

	// capilatie first character of a text(capilaize all invidual words)
	const stringCapitalize = (string: string): string => {
		var capitalText = '';
		string
			.split(' ')
			.forEach(word => (capitalText += ' ' + stringCapitalize(word)));
		return capitalText.slice(1);
	};

	return {
		wordCapitalize,
		stringCapitalize,
	};
};

export default useUtils;
