#!/usr/bin/env node
'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevelopmentMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const PORT = 3000;

const webpackConfig = {
  entry: ['webpack-hot-middleware/client', './index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

const compiler = webpack(webpackConfig);


const app = express();

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use(webpackDevelopmentMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));


app.listen(PORT, error=> {
  if (error) throw error;

  console.log('App is running at http://localhost:%d', PORT);
});
