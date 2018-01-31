var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './webpack/src/entry.js',
	output: {
		path: __dirname + '/webpack/dist',
		filename: 'bundle.js'
	},
	plugins: [
		/*new HtmlWebpackPlugin({
			title: 'Project',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './webpack/src/index.ejs'
		})*/
		new webpack.DefinePlugin({ // <-- key to reducing React's size
	      'process.env': {
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
	    new webpack.optimize.UglifyJsPlugin(), //minify everything
	    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
	] 	
}