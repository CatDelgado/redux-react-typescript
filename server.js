'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevelopmentMiddleware = require('webpack-dev-middleware');

const PORT = 3000;

const webpackConfig = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
};

const app = express();

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use(webpackDevelopmentMiddleware(webpack(webpackConfig), {publicPath: '/assets/' }));

app.listen(PORT, console.log);
