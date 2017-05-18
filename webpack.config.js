var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 然后这个插件会自动将js中的css文件提取出来，生成单独的文件
var HtmlWebpackPlugin = require('html-webpack-plugin');  // html处理
var path = require("path"); //path为node自带
// var hotMiddlewareScript = 'webpack-hot-middleware/client';
module.exports = {
    devtool: "eval-source-map", //生成source Maps
    entry: { //入口文件 __dirname是node的全局变量,位当前脚本所在的目录
        // app: './app/main.js',
        // app: ['webpack-hot-middleware/client','./app/main.js'],
        //  app:['webpack/hot/dev-server',__dirname + "/app/main.js"],
        app: [path.resolve(__dirname, './app/main.js')],
        // m: './web/main.js',
        vendor: [  //添加要打包在vendeors里面的库   目的是将用到的jquery 等第三方库整合到一个文件
            'react',
            'react-dom',
            "jquery"
        ]
    },
    output: {  //打包后输出文件
        path: path.join(__dirname, "build"), //打包后输出文件的目录
        filename: "bundle.js", //打包后的js文件名
        chunkFilename: '[name].[chunkhash].js', //require.ensure 按需加载的时候  输出名称
        publicPath: '',
    },
    module: {
        //loaders加载器,webpack只认识js文件,编译各种类型文件以便浏览器解析
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            },

            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url-loader?limit=10240&name=img/[hash:8].[name].[ext]',
            },
            {
                test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },
            { test: /\.(less|css)$/, loader: 'style-loader!css-loader!less-loader' },
            // { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' }) },//jsx-className
        ]
    },

    plugins: [
        //   ["import", { libraryName: "antd", style: "css" }], // `style: true` 会加载 less 文件，
        new webpack.ProvidePlugin({ //页面可使用下列jquery属性
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new ExtractTextPlugin("[name].css"),//目前是app下,所以打包后统一将项目中的.css编译到app.css中,然后在index.html引入
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),   //把入口文件里面的vendor(第三方依赖)数组打包成vendors.js，然后在index.html引入
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({   //压缩代码 这里使用webpack的内置的插件
            filename: 'index.html',
            template: './index.html', //模板
            // favicon:"favicon.ico",
            inject: true //注入
        })

    ],

    //npm install babel-plugin-react-transform react-transform-hmr --save-dev  安装react-transform-hmr，在不对React模块进行额外的配置的前提下让HMR正常工作


    // webpack-dev-server配置
    // devServer: {
    //     contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    //     historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    //     inline: true,//设置为true，当源文件改变时会自动刷新页面
    //     port: 3000,//设置默认监听端口，如果省略，默认为"8080"
    //     hot: true
    // },

}