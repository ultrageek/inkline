const path = require('path');

module.exports = {
    stories: [
        path.resolve(__dirname, '..', 'src', '**/*.stories.js')
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register'
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias['@inkline/inkline'] = path.resolve(__dirname, '..');

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    }
};
