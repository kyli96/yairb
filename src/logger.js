import bunyan from 'bunyan';
import config from './config';

const logLevel = config.logLevel ? config.logLevel : 'info';

const streams = [
  {
    level: logLevel,
    stream: process.stdout,
  },
];

if (config.logPath) {
  streams.push({
    type: 'rotating-file',
    period: '1d',
    count: 7,
    level: logLevel,
    path: config.logPath,
  });
}

const logger = bunyan.createLogger({
  name: 'server',
  streams,
});

export default logger;
