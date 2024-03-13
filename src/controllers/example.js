exports.hello = async (req, res) => {
    try {
        return res.send("Hello World :)");
    } catch (error) {
	console.error(error);
    }
};
