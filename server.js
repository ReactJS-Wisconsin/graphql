'use strict';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fallback from 'connect-history-api-fallback';
import express from 'express';
import webpack from 'webpack';
import config from'./webpack.config';
import {Schema} from './schema';
import GraphQLHTTP from 'express-graphql';
import mongoose from 'mongoose';

let app = express();
let compiler = webpack(config);

const MONGO_URL = 'mongodb://localhost:27017/addressbook';


app.use(fallback());

app.use(webpackDevMiddleware(compiler, {
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

express().use('/graphql', GraphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
})).listen(3000);

mongoose.connect('mongodb://localhost/addressbook');

//http://localhost:3000/graphql?query={contact(id:"2"){name,address{city,state,phone}}}
console.log('GraphQL server running on http://localhost:3000/graphql');

app.listen(4080, 'localhost', function(error) {

  if (error) {
    console.error(error);
  } else {
    let url = 'http://localhost:4080';
    console.info('Listening on ' + url);
  }

});
