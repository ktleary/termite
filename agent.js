const { Agent } = require("secret-agent");

const createAgent = async options => {
	const agentOptions = options || {
		showReplay: false,
		browserEmulatorId: "chrome-latest",
		blockedResourceTypes: ["All"],
	};
	const agent = await new Agent(agentOptions);
	return agent;
};

module.exports = createAgent;
