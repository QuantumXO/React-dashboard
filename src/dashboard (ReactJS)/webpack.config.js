'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
 
module.exports = {
	entry: [
		'./app/index.jsx',
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, '/dist'),
	},
	
	mode: 'development',
	watch: NODE_ENV == 'development',

    /*target: 'node',   // THIS IS THE IMPORTANT PART
    externals: [nodeExternals()],*/

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
            {
                test: /\.(htm?l)$/,
                exclude: /node_modules/,
                use: ['html-loader'],
            },
			{
        		test: /\.(css|sass)$/,
        		use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      		},
			{
                test: /\.(gif|png|jpe?g|svg)$/,
                include: path.resolve(__dirname, 'img'),
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
			},
           /* {
                test: /\.html$/,
                use: ['html-loader'],
            },*/
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				include: path.resolve(__dirname, '/fonts'),
				use: 'file?name=[path][name].[ext]?[hash]'
			},
		]
	  },
	
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [
       /* new NodemonPlugin(),*/
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'app/index.html',
            path: path.resolve(__dirname, '/dist')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('style.css', { allChunks: true, disable: process.env.NODE_ENV == 'development'}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new LiveReloadPlugin(),
	],
	
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
		contentBase: 'dist',
		port: 5000,
		hot: true
	}
	
};

if(NODE_ENV == 'production'){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
			compress: {
                sequences: true,
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
	);
}












