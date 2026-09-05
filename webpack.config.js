const { createHash } = require("node:crypto");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const webpack = require("webpack");

const database = readFileSync(path.resolve(__dirname, "dist/test.db"));

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new webpack.DefinePlugin({
      __DATABASE_SIZE_BYTES__: JSON.stringify(database.byteLength),
      __DATABASE_CACHE_BUST__: JSON.stringify(
        createHash("sha256").update(database).digest("hex").slice(0, 12)
      ),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/dist",
  },
};
