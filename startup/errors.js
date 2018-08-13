import winston from 'winston'

export default () => {
    winston.exceptions.handle(new winston.transports.File({filename: 'uncaughtExceptions.log'}))
    winston.add(new winston.transports.File({filename: 'logfile.log'}))
    process.on('unhandledRejection', ex => { throw ex })
}