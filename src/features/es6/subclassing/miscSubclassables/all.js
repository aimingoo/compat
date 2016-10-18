let booleanSubclassing = require('./boolean.js')
let numberSubclassing = require('./number.js')
let stringSubclassing = require('./string.js')
let errorSubclassing = require('./error.js')
let mapSubclassing = require('./map.js')
let setSubclassing = require('./set.js')

module.exports = [
  booleanSubclassing.func,
  numberSubclassing.func,
  stringSubclassing.func,
  errorSubclassing.func,
  mapSubclassing.func,
  setSubclassing.func
]