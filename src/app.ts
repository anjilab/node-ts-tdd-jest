// import createHttpError from 'http-errors';
// import express from 'express';
// import logger from 'morgan';
// console.log('APPLICATION')

// // var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createHttpError(404));
// });

// // error handler
// app.use(function (err: any, req: any, res: any, next: any) {
//   console.log(next, 'iiiiiiiii')
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// // process.on("uncaughtException", error => {
// //   errorHandler.handleError(error);
// // });

// // process.on("unhandledRejection", (reason) => {
// //   errorHandler.handleError(reason);
// // });

// export default app;

// ====================

import express, { Request, Response, NextFunction } from 'express';
import morganMiddleware from './middlewares/morgan.middleware';
import routes from './routes';
import Logger from './utils/logger';
// import Logger from './core/Logger';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { corsUrl, environment } from './config';
// import './database'; // initialize database
// import { NotFoundError, ApiError, InternalError } from './core/ApiError';
// import routesV1 from './routes/v1';

process.on('uncaughtException', (e) => {
  console.error(e);
});

const app = express();

// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
// app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
// app.use('/v1', routesV1);

// catch 404 and forward to error handler
// app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // if (err instanceof ApiError) {
  //   ApiError.handle(err, res);
  // } else {
  //   if (environment === 'development') {
  //     Logger.error(err);
  //     return res.status(500).send(err.message);
  //   }
  //   ApiError.handle(new InternalError(), res);
  // }
});

// app.use('/', (req, res, next) => {
//   // console.log('/route hit');
//   // res.send('Please indicate the route properly.');
// });
app.use(morganMiddleware);

app.get('/logger', (_, res) => {
  Logger.error('This is an error log');
  Logger.warn('This is a warn log');
  Logger.info('This is a info log');
  Logger.http('This is a http log');
  Logger.debug('This is a debug log');

  res.send('Hello world');
});

// Routes
app.use('/api/v1', routes);

export default app;
