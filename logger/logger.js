const winston = require('winston');

var options = {
    fileError: {
        level: 'error',
        filename: '../app/logs/error.log',
        json: true,
        colorize: true,
      },
      fileInfo: {
        level: 'info',
        filename: '../app/logs/app.log',
        handleExceptions: true,
        json: true,
        colorize: true,
      },
      console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
      },
}
var transports = [new winston.transports.Console(options.console)];

if(process.env.NODE_ENV!='development'){
  transports = [
    new winston.transports.File(options.fileError),
    new winston.transports.File(options.fileInfo),
    new winston.transports.Console(options.console)
  ];
}
const logger = winston.createLogger({
    transports:transports
})

logger.stream = {
    write: function(message, encoding) {
      // use the 'info' log level so the output will be picked up by both transports (file and console)
      logger.info(message);
    },
  };
  
  module.exports = logger;