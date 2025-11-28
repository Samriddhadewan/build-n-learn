require("dotenv").config();

const config = {
    app: {
        name: process.env.APP_NAME || "DefaultApp",
        version: process.env.VERSION || "0.0.0",
        port: process.env.PORT || 8080
    }
}

module.exports = config;
console.log(config.app)