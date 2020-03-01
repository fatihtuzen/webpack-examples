const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};