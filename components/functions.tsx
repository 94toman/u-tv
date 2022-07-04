import htmlToFormattedText from 'html-to-formatted-text';

export const truncateString = (str, n) => {
	return htmlToFormattedText(str?.length > n ? str.substr(0, n - 1) + '...' : str);
};

export const getDate = (timestamp) => {
	return new Intl.DateTimeFormat('cs-CZ', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(
		timestamp * 1000
	); // 01/11/2021
};
