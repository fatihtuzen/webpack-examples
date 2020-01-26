const path = require("path");
const autoprefixer = require('autoprefixer');

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
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    }
                ]
            }
        ]
    }
};