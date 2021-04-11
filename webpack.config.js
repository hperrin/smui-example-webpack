const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: "svelte-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                includePaths: ["./theme", "./node_modules"],
              },
            },
          },
        ],
      },
    ],
  },
};
