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
            /*
            aşağıda kurallara css-loader'ımızı ekledik
            test: ile css uzantısını tanımasını sağladık
            use: ile hangi loader'ların kullanılacağını belirttik
            */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};