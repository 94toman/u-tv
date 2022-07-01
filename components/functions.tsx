import htmlToFormattedText from 'html-to-formatted-text';

export const truncateString = (str, n) => {
	return htmlToFormattedText(str?.length > n ? str.substr(0, n - 1) + '...' : str);
};
