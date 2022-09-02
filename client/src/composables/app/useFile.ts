const useFile = () => {
	const resolvePathUrl = (
		assetPath: string,
		pathPrefix: string = '../../assets/'
	): string => {
		const path = `${pathPrefix}${assetPath}`;
		return new URL(path, import.meta.url).href;
	};

	return {
		resolvePathUrl,
	};
};

export default useFile;
