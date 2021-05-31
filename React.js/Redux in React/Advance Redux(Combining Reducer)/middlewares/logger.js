/* Logger middleware - logs the ACTION and NEW STATE as a result of that action */
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('Action: ', action) // Logging the action, and the type
    const returnValue = next(action) // calling the next middleware in chain
    console.log('New state: ', store.getState()) // Logging the new state after getting resolved by the reducer
    console.groupEnd()
    return returnValue
}
export default logger;
