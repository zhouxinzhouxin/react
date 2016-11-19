
module.exports = {
    entry: './src/js/index.js',
    output: {
       path: './static/',
       publicPath: 'http://localhost:8080/static/',
       filename: 'index.js' 
    },
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel', query: { presets: ['react','es2015'] }, exclude: /node_modules/},
            {test: /.less$/, loader: 'style!css!less'},
            {test: /.(jpg|png)$/, loader: 'url?limit=8192'}
        ]
    }
}