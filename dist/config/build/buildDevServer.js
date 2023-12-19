export function buildDevServer(options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        open: true,
        // Нужно для того, чтоб работал реакт роутер
        // только для дев сервера, если раздавать статику через nginx то надо будет настраивать проксирование
        historyApiFallback: true,
    };
}
