const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/example.html',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          'file-loader?name=[name].[ext]',
          {
            loader: path.resolve(__dirname, './src/loader.js'),
            options: {
              name: '你好'
            }
          }
        ]
      }
    ]
  }
}
