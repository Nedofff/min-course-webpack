import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
export function buildWebpack(options) {
    var mode = options.mode, paths = options.paths;
    var isDev = mode === 'development';
    return {
        mode: mode !== null && mode !== void 0 ? mode : 'development',
        // entry: path.resolve(__dirname, 'src',  'index.js'),
        entry: paths.entry,
        output: {
            path: paths.output,
            // Здесь не стоит указывать статичное название, так как браузер будет вместо нового файла брать из кеша
            // Сюда можно ебануть много чего лучше чекать в доке
            filename: '[name].[contenthash].js',
            // Для очищения перед сборкой папки, без этого будет сыпать новые файлы к старым
            clean: true
        },
        module: {
            // Порядок имеет значение!!!
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        // Нужно для того, чтоб отображать где именно ошибка
        devtool: isDev ? 'inline-source-map' : false,
        plugins: buildPlugins(options)
    };
}
