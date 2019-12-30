const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    },
    plugins: [
        /*
        plugin özelliklerine filename ve template değerleri yerleştirildi
        (boş bırakılsaydı boş bir index.html dosyası /dist altına oluşturup içerisine
        output kısmında tanımlanan index.js dosyasını enjekte edecekti)
        filename: oluşturulacak olan dosyanın adını tanımlamak için kullanılır
        template: orjinal hangi template ile çalışılacak ise o dosyayı tanımlamamızı ister
        yani template içerisinde yazılan index.html dosyamızı alıp adını
        new-index.html olarak değiştirdikten sonra /dist altına kopyalayacaktır
        bu işlemlerle beraber paketlediğimiz dosyalarda içerisine enjekte edilmektedir
        */
        new HtmlWebpackPlugin({
            filename: "new-index.html",
            template: "index.html"
        })
    ]
};