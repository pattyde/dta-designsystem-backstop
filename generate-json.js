const fs = require( 'fs' );

// CONFIG
const urls = [
	'http://localhost:8080',
	'http://localhost:8080/get-started',
	'http://localhost:8080/components',
	'http://localhost:8080/templates',
	'http://localhost:8080/community',
	'http://localhost:8080/support',
	'http://localhost:8080/download',
	'http://localhost:8080/components/core',
	'http://localhost:8080/components/accordion',
	'http://localhost:8080/components/animate',
	'http://localhost:8080/components/body',
	'http://localhost:8080/components/breadcrumbs',
	'http://localhost:8080/components/buttons',
	'http://localhost:8080/components/cta-link',
	'http://localhost:8080/components/callout',
	'http://localhost:8080/components/control-input',
	'http://localhost:8080/components/direction-links',
	'http://localhost:8080/components/footer',
	'http://localhost:8080/components/grid-12',
	'http://localhost:8080/components/header',
	'http://localhost:8080/components/headings',
	'http://localhost:8080/components/inpage-nav',
	'http://localhost:8080/components/keyword-list',
	'http://localhost:8080/components/link-list',
	'http://localhost:8080/components/page-alerts',
	'http://localhost:8080/components/progress-indicator',
	'http://localhost:8080/components/responsive-media',
	'http://localhost:8080/components/select',
	'http://localhost:8080/components/skip-link',
	'http://localhost:8080/components/tags',
	'http://localhost:8080/components/text-inputs',
	'http://localhost:8080/components/cards',
	'http://localhost:8080/components/main-nav',
	'http://localhost:8080/components/side-nav',
	'http://localhost:8080/components/table',
	'http://localhost:8080/components/search-box',
	'http://localhost:8080/components/core/rationale',
	'http://localhost:8080/components/core/accessibility',
	'http://localhost:8080/components/core/code',
	'http://localhost:8080/components/core/discussion',
	'http://localhost:8080/components/core/live',
	'http://localhost:8080/components/accordion/rationale',
	'http://localhost:8080/components/accordion/accessibility',
	'http://localhost:8080/components/accordion/code',
	'http://localhost:8080/components/accordion/discussion',
	'http://localhost:8080/components/accordion/live',
	'http://localhost:8080/components/animate/rationale',
	'http://localhost:8080/components/animate/code',
	'http://localhost:8080/components/animate/discussion',
	'http://localhost:8080/components/animate/live',
	'http://localhost:8080/components/body/rationale',
	'http://localhost:8080/components/body/accessibility',
	'http://localhost:8080/components/body/discussion',
	'http://localhost:8080/components/body/live',
	'http://localhost:8080/components/breadcrumbs/rationale',
	'http://localhost:8080/components/breadcrumbs/accessibility',
	'http://localhost:8080/components/breadcrumbs/code',
	'http://localhost:8080/components/breadcrumbs/discussion',
	'http://localhost:8080/components/breadcrumbs/live',
	'http://localhost:8080/components/buttons/rationale',
	'http://localhost:8080/components/buttons/accessibility',
	'http://localhost:8080/components/buttons/code',
	'http://localhost:8080/components/buttons/discussion',
	'http://localhost:8080/components/buttons/live',
	'http://localhost:8080/components/cta-link/rationale',
	'http://localhost:8080/components/cta-link/accessibility',
	'http://localhost:8080/components/cta-link/code',
	'http://localhost:8080/components/cta-link/discussion',
	'http://localhost:8080/components/cta-link/live',
	'http://localhost:8080/components/callout/rationale',
	'http://localhost:8080/components/callout/accessibility',
	'http://localhost:8080/components/callout/code',
	'http://localhost:8080/components/callout/discussion',
	'http://localhost:8080/components/callout/live',
	'http://localhost:8080/components/control-input/rationale',
	'http://localhost:8080/components/control-input/accessibility',
	'http://localhost:8080/components/control-input/code',
	'http://localhost:8080/components/control-input/discussion',
	'http://localhost:8080/components/control-input/live',
	'http://localhost:8080/components/direction-links/rationale',
	'http://localhost:8080/components/direction-links/accessibility',
	'http://localhost:8080/components/direction-links/code',
	'http://localhost:8080/components/direction-links/discussion',
	'http://localhost:8080/components/direction-links/live',
	'http://localhost:8080/components/footer/rationale',
	'http://localhost:8080/components/footer/accessibility',
	'http://localhost:8080/components/footer/code',
	'http://localhost:8080/components/footer/discussion',
	'http://localhost:8080/components/footer/live',
	'http://localhost:8080/components/grid-12/rationale',
	'http://localhost:8080/components/grid-12/code',
	'http://localhost:8080/components/grid-12/discussion',
	'http://localhost:8080/components/grid-12/live',
	'http://localhost:8080/components/header/rationale',
	'http://localhost:8080/components/header/accessibility',
	'http://localhost:8080/components/header/code',
	'http://localhost:8080/components/header/discussion',
	'http://localhost:8080/components/header/live',
	'http://localhost:8080/components/headings/rationale',
	'http://localhost:8080/components/headings/accessibility',
	'http://localhost:8080/components/headings/code',
	'http://localhost:8080/components/headings/discussion',
	'http://localhost:8080/components/headings/live',
	'http://localhost:8080/components/inpage-nav/rationale',
	'http://localhost:8080/components/inpage-nav/accessibility',
	'http://localhost:8080/components/inpage-nav/code',
	'http://localhost:8080/components/inpage-nav/discussion',
	'http://localhost:8080/components/inpage-nav/live',
	'http://localhost:8080/components/keyword-list/rationale',
	'http://localhost:8080/components/keyword-list/accessibility',
	'http://localhost:8080/components/keyword-list/code',
	'http://localhost:8080/components/keyword-list/discussion',
	'http://localhost:8080/components/keyword-list/live',
	'http://localhost:8080/components/link-list/rationale',
	'http://localhost:8080/components/link-list/accessibility',
	'http://localhost:8080/components/link-list/code',
	'http://localhost:8080/components/link-list/discussion',
	'http://localhost:8080/components/link-list/live',
	'http://localhost:8080/components/page-alerts/rationale',
	'http://localhost:8080/components/page-alerts/accessibility',
	'http://localhost:8080/components/page-alerts/code',
	'http://localhost:8080/components/page-alerts/discussion',
	'http://localhost:8080/components/page-alerts/live',
	'http://localhost:8080/components/progress-indicator/rationale',
	'http://localhost:8080/components/progress-indicator/accessibility',
	'http://localhost:8080/components/progress-indicator/code',
	'http://localhost:8080/components/progress-indicator/discussion',
	'http://localhost:8080/components/progress-indicator/live',
	'http://localhost:8080/components/responsive-media/rationale',
	'http://localhost:8080/components/responsive-media/discussion',
	'http://localhost:8080/components/responsive-media/live',
	'http://localhost:8080/components/select/rationale',
	'http://localhost:8080/components/select/accessibility',
	'http://localhost:8080/components/select/code',
	'http://localhost:8080/components/select/discussion',
	'http://localhost:8080/components/select/live',
	'http://localhost:8080/components/skip-link/rationale',
	'http://localhost:8080/components/skip-link/accessibility',
	'http://localhost:8080/components/skip-link/code',
	'http://localhost:8080/components/skip-link/discussion',
	'http://localhost:8080/components/skip-link/live',
	'http://localhost:8080/components/tags/rationale',
	'http://localhost:8080/components/tags/accessibility',
	'http://localhost:8080/components/tags/code',
	'http://localhost:8080/components/tags/discussion',
	'http://localhost:8080/components/tags/live',
	'http://localhost:8080/components/text-inputs/rationale',
	'http://localhost:8080/components/text-inputs/accessibility',
	'http://localhost:8080/components/text-inputs/code',
	'http://localhost:8080/components/text-inputs/discussion',
	'http://localhost:8080/components/text-inputs/live'
]; // An array of URLs (strings) that you want to create scenarios for in Backstop
const baseUrl = 'http://localhost:8080'; // The base URL (string) for your application, typically a local build or staging environment
const referenceBaseUrl = 'https://designsystem.gov.au'; // The base reference URL (string) for your application, typically your production envrionment
const testTemplate = { // Template for your backstop.json configuration file. Add viewports and adjust global settings here
	'id': '',
	'viewports': [
		{
			'label': 'macbook pro 13',
			'width': 2560,
			'height': 1600
		}
	],
	'onBeforeScript': 'puppet/onBefore.js',
	'onReadyScript': 'puppet/onReady.js',
	'scenarios': void(0),
	'paths': {
		'bitmaps_reference': 'backstop_data/bitmaps_reference',
		'bitmaps_test': 'backstop_data/bitmaps_test',
		'engine_scripts': 'backstop_data/engine_scripts',
		'html_report': 'backstop_data/html_report',
		'ci_report': 'backstop_data/ci_report'
	},
	'report': ['browser'],
	'engine': 'puppeteer',
	'engineOptions': {
		'args': ['--no-sandbox']
	},
	'asyncCaptureLimit': 5,
	'asyncCompareLimit': 50,
	'debug': false,
	'debugWindow': false
};

/**
 * Settings here will be applied to each scenario generated
 * label, url, and referenceUrl will be unique for each scenario based on the
 * urls constant
 *
 * @param  {string} url - The url for this scenario
 *
 * @return {object}     - The config object
 */
const createScenario = ( url ) => ({
	'label': setLabel( url ),
	'cookiePath': 'backstop_data/engine_scripts/cookies.json',
	'url': url,
	'referenceUrl': setReferenceUrl( url ),
	'readyEvent': '',
	'readySelector': '',
	'delay': 0,
	'hideSelectors': [],
	'removeSelectors': [],
	'hoverSelector': '',
	'clickSelector': '',
	'postInteractionWait': 0,
	'selectors': [],
	'selectorExpansion': true,
	'expect': 0,
	'misMatchThreshold' : 0.1,
	'requireSameDimensions': true
});

/**
 * Generate a label based on the url
 *
 * @param  {string} url - The url unprocessed
 *
 * @return {string}     - The label to be applied to the scenario
 */
const setLabel = ( url ) =>
	url.endsWith( baseUrl )
		? 'homepage'
		: page = url.slice( baseUrl.length + 1 ).concat(' page');

/**
 * Generate a reference url
 *
 * @param  {string} url - The url unprocessed
 *
 * @return {string}     - The reference url to be applied to the scenario
 */
const setReferenceUrl = ( url ) =>
	url.includes( baseUrl )
		? url.replace( baseUrl, referenceBaseUrl )
		: referenceBaseUrl;

/**
 * Generate json configuration file
 *
 * @param  {array}  urls     - A list of all urls
 * @param  {object} template - The template object
 *
 * @return {object}          - The finished object
 */
const generateObject = ( urls, template = testTemplate ) => {
	const scenarios = [];

	urls.forEach( function( url ) {
		scenarios.push( createScenario( url ) );
	});

	template.scenarios = scenarios;

	return testTemplate;
}

/**
 * Writes backstop.json to the current directory
 *
 * @param  {array}  allUrls  - A list of all urls
 * @param  {string} filename - The filname the json needs to be written to
 */
const writeFile = ( allUrls = urls, filename = 'backstop.json' ) => {
	let content = generateObject( allUrls );
	content = JSON.stringify( content, null, '\t' );

	fs.writeFile( filename, content, ( error ) => {
		if ( error ) {
			throw err;
		}

		console.log( 'Backstop configuration file successfully created' )
	});
}

// MAIN PROGRAMM
writeFile();
