const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    networks: {
        development: {
            privateKey: process.env.PRIVATE_KEY,
            fullNode: "http://127.0.0.1:9090",
            solidityNode: "http://127.0.0.1:9090",
            eventServer: "http://127.0.0.1:9090",
            network_id: "*"
        },
        mainnet: {
            privateKey: process.env.PRIVATE_KEY,
            // tronbox 2.1.9+
            // fullHost: "https://api.trongrid.io",
            // tronbox < 2.1.9
            fullNode: "https://api.trongrid.io",
            solidityNode: "https://api.trongrid.io",
            eventServer: "https://api.trongrid.io",
            network_id: "*"
        },
        shasta: {
            privateKey: process.env.PRIVATE_KEY,
            fullNode: "https://api.shasta.trongrid.io",
            solidityNode: "https://api.shasta.trongrid.io",
            eventServer: "https://api.shasta.trongrid.io",
            network_id: "*"
        },
    },
};
