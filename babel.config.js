module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: 'auto',
                useBuiltIns: 'usage',
                corejs: '3.26.1',
                targets: {
                    browsers: ['last 1 version'],
                    safari: '9',
                    ie: '11',
                    ios: '9',
                    android: '4',
                },
            },
        ],
        '@babel/react',
        [
            '@babel/preset-typescript',
            {
                onlyRemoveTypeImports: true,
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
};
