const useFile = () => {
	/**
	 * --------------------------------------------------------------------------------
	 * resolves path url of images. path should be reference to
	 * client/src/assets folder
	 * --------------------------------------------------------------------------------
	 */
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
