require("babel-polyfill")
require("babel-core").transform("code", {
  plugins: ["transform-decorators"]
});
require('babel-register')({ //it allow to use 'import' ES6 syntax
    presets: [ 'env' , 'flow'], //use flow for static types
    plugins: ["transform-object-rest-spread", "transform-decorators-legacy"] //use spread operator
})

// Import the rest of our application.
module.exports = require('./www')