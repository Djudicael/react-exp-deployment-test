//entry->output
const path = require('path');
//console.log(path.join(__dirname,'public'));
module.exports = (env) => {
    const isProduction= env=== 'production';
    console.log('env '+ env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public/','dist'),
            filename: 'bundle.js',
            publicPath: '/',

        },
        module: {
            rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }

            ]
        },
        devtool: isProduction? 'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath:'/dist/'

        }
    };
};