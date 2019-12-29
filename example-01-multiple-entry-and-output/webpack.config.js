const path = require("path");

module.exports = {
    // mode: "development || "production",
    entry: {
        home: "./src/home",
        about: "./src/about"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    }
};