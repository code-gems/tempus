const path = require("path");

module.exports = {
	entry: "./src/codegems-tempus.ts",
	// devtool: "inline-source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "tempus-bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		contentBase: "demo",
		open: true
		// contentBase: path.join(__dirname, "demo"),
		// compress: true,
		// port: 8089
	}
};
