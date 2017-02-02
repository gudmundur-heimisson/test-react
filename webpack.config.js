module.exports = {
    entry: "./project/static/jsx/hello-react.jsx",
    output: {
        path: "./project/static/scripts",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loaders: [
                "style!css"
              ]
            },
            {
              test: /\.jsx$/,
              loaders: [
                "babel-loader"
              ]
            }
        ]
    },
   externals: {
     "react": "React",
     "react-dom": "ReactDOM"
   }
};
