const moment = require("moment");
const os = require("os");
const osUtils = require("os-utils");

exports.status = async (req, res) => {
    try {
        const vpsStatus = {
            memoryUsage: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2),
            cpuUsage: 0,
        };

        osUtils.cpuUsage(function (v) {
            vpsStatus.cpuUsage = (v * 100).toFixed(2);

            return res.json(vpsStatus);
        });
    } catch (error) {
        console.error("System", "Error handling helloWorld");
    }
};
