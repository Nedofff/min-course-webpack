import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === "development";
    var assetsLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
    var svgrLoader = {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                } }],
    };
    var cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
            },
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            // "css-loader",
            "sass-loader",
        ],
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        },
        exclude: /node_modules/,
    };
    // Порядок имеет значение!!!
    return [
        scssLoader,
        svgrLoader,
        assetsLoader,
        tsLoader
    ];
}
