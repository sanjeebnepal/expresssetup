const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "./index.js"),

  target: "node",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  devtool: "cheap-module-source-map"
};
