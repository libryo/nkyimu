const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        'auto generation': './examples/auto generation/index.js',
        'manual generation': './examples/manual generation/index.js',
    },
    mode: "production",
    output: {
        filename: "[name]/index.js",
        path: __dirname + "/build/examples"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './examples/auto generation/index.html', to: 'auto generation' },
            { from: './examples/manual generation/index.html', to: 'manual generation' },
        ]),
    ],
    // Enable sourcemaps for debugging webpack output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
    }
};