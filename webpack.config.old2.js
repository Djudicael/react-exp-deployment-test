//entry->output
const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
//console.log(path.join(__dirname,'public'));
module.exports = (env) => {
    const isProduction= env=== 'production';
    const CSSExtract= new MiniCssExtractPlugin({
        filename: "[style].css",
      });
    console.log('env '+ env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public/'),
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
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]

                }

            ]
        },
        optimization: {
            splitChunks: {
              cacheGroups: {
                styles: {
                  name: 'styles',
                  test: /\.css$/,
                  chunks: 'all',
                  enforce: true
                }
              }
            }
          },
        plugins:[
            CSSExtract
        ],
        devtool: isProduction? 'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true

        }
    };
};