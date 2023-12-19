import webpack, { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins(options) {
    var isDev = options.mode === 'development';
    var plugin = [
        // Также автоматически будут подключаться js бандл к html
        // Без этого плагина div id=root не появиться в сборке так как вебпак отчистит пустые теги
        new HtmlWebpackPlugin({
            // Точнее без этой строки (к строке выше)
            template: options.paths.html,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        })
    ];
    if (isDev) {
        // Показывает процент готовности сборки, для удобства
        // В проде не стоит использовать, может замедлят сборку
        plugin.push((new webpack.ProgressPlugin()));
    }
    else {
        plugin.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
        options.analyzer && plugin.push(new BundleAnalyzerPlugin());
    }
    return plugin;
}
