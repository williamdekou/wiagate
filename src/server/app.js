import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cookiesMiddleware from 'universal-cookie-express';
import bodyParser from 'body-parser';

import index from './routes/index';
import users from './routes/users';
import api from './api';

const app = express();

app.set('APP_SECRET', process.env.APP_SECRET);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookiesMiddleware())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * WiFiDog Protocol routes definition
 * 
 */
app.get('/wifidog/auth', (req, res, next) => {
  res.send('Auth: 5');
  res.end();
});
app.use('/api', api(app));
app.use('/ind', index);
app.use('/users', users);
/*
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
export default app;
