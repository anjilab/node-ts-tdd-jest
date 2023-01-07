import winston from 'winston';

/* Logger, similar to writing console.log but console.log writes in terminal. 
This library makes easier to write log in files and see in terminal according to type.
*/

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
  )
);

const transports = [
  /* Following are 3 transports, i.e where to log. literally, storage device for your logs.
    We may want to log the errors persisted in remote location like db, but all logs to console
    or simply in  a file. Built in transport are: Console, File, Http,Stream.
*/
  // Allow the use the console to print the messages
  new winston.transports.Console(),
  // Allow to print all the error level messages inside the error.log file
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
  }),
  // Allow to print all the error message inside the all.log file, here even error log are consoled.
  new winston.transports.File({ filename: 'logs/all.log' })
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
});

export default Logger;
