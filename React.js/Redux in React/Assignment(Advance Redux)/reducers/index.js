import { combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from '../middlewares/logger'

import employeeReducer from "./employee"
import contactsReducer from "./contact"

export default combineReducers({
    data: employeeReducer,
    contacts: contactsReducer
})

export const middlewares = applyMiddleware(
    thunk,
    logger,
)
