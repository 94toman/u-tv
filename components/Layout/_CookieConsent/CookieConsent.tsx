import { CookieBanner } from '@keepist/react-gdpr-cookie-banner';
import TagManager from 'react-gtm-module';

const CookieConsent = () => {
	const tagManagerArgs = {
		gtmId: 'GTM-000000',
		dataLayer: {
			cookie: 'Statistic initialized',
		},
	};

	// const FacebookPixel = () => {
	// 	React.useEffect(() => {
	// 		import('react-facebook-pixel')
	// 			.then((x) => x.default)
	// 			.then((ReactPixel) => {
	// 				ReactPixel.init('pixel ID here');
	// 				ReactPixel.pageView();
	// 				Router.events.on('routeChangeComplete', () => {
	// 					ReactPixel.pageView();
	// 				});
	// 			});
	// 	});
	// 	return null;
	// };

	return (
		<>
			{/* https://github.com/keepist/react-gdpr-cookie-banner */}
			<CookieBanner
				message={'Používáme cookies, abychom vám poskytli nejlepší online zážitek. Soubory Cookies:'}
				policyLink={'/zasady'}
				privacyPolicyLinkText={'Zásady zpracování osobních údajů'}
				necessaryOptionText={'Nezbytně nutné'}
				showPreferencesOption={false}
				statisticsOptionText={'Analytické'}
				marketingOptionText={'Marketingové'}
				acceptAllButtonText={'Přijmout vše'}
				acceptSelectionButtonText={'Přijmout výběr'}
				showAcceptSelectionButton={true}
				onAccept={() => {
					// load your preferences when consent is given
					console.log('Necessary Consent granted');
				}}
				onAcceptStatistics={() => {
					console.log('GTM initialized');
					TagManager.initialize(tagManagerArgs);
					// load your statistics trackers here
				}}
				onAcceptMarketing={() => {
					console.log('FB pixel initialized');
					//FacebookPixel();
					// load your marketing trackers here
				}}
				className="banner"
				styles={{
					dialog: {
						backgroundColor: '#ececec',
						position: 'fixed',
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 10000,
						padding: '20px 0 50px',
						textAlign: 'left',
					},
					message: {
						minHeight: '32px',
						fontSize: '12pt',
						fontWeight: 400,
						lineHeight: '130%',
						padding: '10px 0px 10px 12.5px',
						color: 'rgb(0, 0, 0)',
					},
					checkbox: {
						position: 'absolute',
						top: '2px',
						left: '0px',
						width: '16px',
						height: '16px',
						zIndex: 2,
						cursor: 'pointer',
					},
					optionLabel: {
						color: 'black',
						height: 'auto',
						width: 'auto',
						minHeight: '14px',
						fontSize: '12pt',
						display: 'inline-block',
						padding: '1px 0px 0px 25px',
						position: 'relative',
						top: '0px',
						left: '0px',
						zIndex: '1',
						cursor: 'pointer',
						verticalAlign: 'top',
					},
					buttonWrapper: {
						float: 'right',
						margin: '0 50px',
					},
					button: {
						display: 'inline-block',
						padding: '5px',
						minWidth: '80px',
						color: '#ffffff',
						textDecoration: 'none',
						fontSize: '10pt',
						fontWeight: '400',
						margin: '10px 5px',
						textAlign: 'center',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						borderRadius: '5px',
					},
				}}
			/>
		</>
	);
};

export default CookieConsent;
