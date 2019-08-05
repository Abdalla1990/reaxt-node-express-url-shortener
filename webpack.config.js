const path = require('path');
require("babel-polyfill");
const OutPutPath = path.join(__dirname, './public/');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
    console.log('env', env);

    let isProduction = env === 'production';
   // const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: ['babel-polyfill',"./src/app"], // read the code in app.js
        output: { // convert it into native react code in the public directory.
            path: OutPutPath,
            filename: 'bundle.js' // the name of the file the code gets converted in.
        },
        module: { // any third party library 
            rules: [{
                loader: 'babel-loader', // babel which converts the code from jsx to react 
                test: /\.js$/, // any file that ends with .js
                exclude: /node_modules/ // don't read these files 
            }, {
                test:/\.s?css$/, // load the scss styles the S is optional , so its either scss or css 
                use:['style-loader',// use these 2 loaders when runing the code. 
                'css-loader',// use these 2 loaders when runing the code. 
                'sass-loader'] // use this to convert the sass to css YOU HAVE TO INSTALL SASS_LOADER AND NODE_SASS before adding this. 
            }
            ,{
                test: /\.(gif|png|jpe?g)$/i,
                loaders: [
                  'file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                      gifsicle: {
                        interlaced: false,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // Specifying webp here will create a WEBP version of your JPG/PNG images
                      webp: {
                        quality: 75
                      }
                    },
                  }
                ]
            },
          ]
        },
        plugins: [
         //   CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
          contentBase: OutPutPath,
          watchContentBase: true,
          historyApiFallback: true,
          proxy: [ // allows redirect of requests to webpack-dev-server to another destination
            {
              context: ['/', '/search'], 
              target: 'http://localhost:3000', 
              secure: false,//don't use https
              overlay: { 
                warnings: true, 
                errors: true,
              }
            }
          ]
        },
        
        
    };
}