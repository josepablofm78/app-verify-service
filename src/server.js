import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import boxen from 'boxen'
import config from './config'
import logger from './utils/logger'
import serviceRoutes from './routes/verifyServiceRouter'

logger.info('Starting Verify App Service...')

const app = express()

app.use(cors()) 
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', serviceRoutes)


const server = app.listen(config.server.port, (error) => {
    if (error) {
        logger.error('Error starting server:')
        logger.error(error)
        process.exit(1)
    }
    logger.info(
        boxen(
            `Verify App Service\n   running on port ${config.server.port}`,
            {
                padding: 2
            }
        )
    )
})

export default server
