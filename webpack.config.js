const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var path = require('path');


module.exports ={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js'
    },
    devtool: "eval-cheap-module-source-map",
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        fallback: 'responsive-loader'
                    }
                  }
                ]
              }
            
          ],
        //   loaders: [
        //     {
        //       test: /\.json$/,
        //       loader: 'json-loader'
        //     }],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from:'src/index.html',
            toType: 'dir'
        }]),
        new CleanWebpackPlugin('./dist')
        
    ]
}