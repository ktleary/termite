const createAgent = require("../../agent");

const statusOk = status => status > 199 && status < 300;

const fetchHtml = async url => {
	try {
		const agent = await createAgent();

		console.info(`\n${url}`);
		const resource = await agent.goto(url, 10 * 1000);
		const statusCode = await resource.response.statusCode;
		const html = await resource.response.text();
		console.info(statusCode);
		console.info(statusOk(statusCode));
		console.info("-------");
		await agent.close();
		return html;
	} catch (err) {
		console.info(`Error: ${err}`);
		return false;
	}
};

module.exports = { fetchHtml };
