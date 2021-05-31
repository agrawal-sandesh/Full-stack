/* middlewares - logger */
import thunk from 'redux-thunk' // importing Thunk
import logger from './logger'
import { applyMiddleware } from 'redux'
export default applyMiddleware(
    thunk, // Using thunk - will always be the first middleware
    logger, // will always be the last middleware, just before the Action hits the Reducer
)
