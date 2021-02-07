const addMethod = require('./calculation/add')
const subMethod = require('./calculation/sub')
const compMethod = require('./comparison/compare')

console.log("Result for Addition is: " + addMethod.add(121, 21))
console.log("Result for Substraction is: " + subMethod.sub(121, 21))
console.log("Result for Comparison is: " + compMethod.maximum(121, 21))