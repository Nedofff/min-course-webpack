import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type TMode = 'production' | 'development'
interface IEnvVariables {
  mode: TMode
  port: number
}

export default (env: IEnvVariables) => {

  const isDev = env.mode === 'development'


  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    // entry: path.resolve(__dirname, 'src',  'index.js'),
    entry: path.resolve(__dirname, 'src',  'index.ts'),
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      devServer: isDev ? {
        port: env.port ?? 3000,
        open: true,
      } : undefined,
      // Нужно для того, чтоб отображать где именно ошибка
    devtool: isDev ? 'inline-source-map' : false,
    output: {
        path: path.resolve(__dirname, 'build'),

        // Здесь не стоит указывать статичное название, так как браузер будет вместо нового файла брать из кеша
        // Сюда можно ебануть много чего лучше чекать в доке
        filename: '[name].[contenthash].js',

        // Для очищения перед сборкой папки, без этого будет сыпать новые файлы к старым
        clean: true
    },
    plugins: [
        // Также автоматически будут подключаться js бандл к html
        // Без этого плагина div id=root не появиться в сборке так как вебпак отчистит пустые теги
        new HtmlWebpackPlugin({
            // Точнее без этой строки (к строке выше)
            template: path.resolve(__dirname, 'public', 'index.html'),

        }),
        // Показывает процент готовности сборки, для удобства
        // В проде не стоит использовать, может замедлять сборку
        isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean)
  }
  return config
}