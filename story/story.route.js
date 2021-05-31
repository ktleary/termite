const processUrl = (req, res) => {
	const url = req.query.url;
	res.status(200).json({ url });
};

module.exports = { processUrl };
