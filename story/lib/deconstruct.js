const { fetchHtml } = require("../services/data.service");
const { htmlToText } = require("html-to-text");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

const cleanHtml = (url, rawHtml) => {
	const doc = new JSDOM(rawHtml, {
		url,
	});
	const reader = new Readability(doc.window.document);
	return reader.parse();
};

const deconstruct = async (url = "https://stringtalk.org") => {
	const html = await fetchHtml(url);
	const cleanText = htmlToText(html);
	console.info("htmlToText\n");
	console.info(cleanText);
	const { textContent } = cleanHtml(url, html);
	console.info("\nReadability\n");
	console.info(textContent);

	// const { byline, content, excerpt, siteName, textContent, title } = cleanHtml(
	// 	url,
	// 	html
	// );

	// console.info(html);
	// console.info("\n-----------\n");
	// console.info({ byline, content, excerpt, siteName, textContent, title });
};

const url =
	"https://www.abc.net.au/news/2021-05-31/jbs-meatworks-across-australia-us-canada-hit-by-cyber-attack/100178310";

deconstruct(url);

module.exports = deconstruct;
