'use strict'

const append = require('vary').append

// Same implementation of https://github.com/jshttp/vary
// but adapted to the Fastify API
function vary (field) {
  var value = this.getHeader('Vary') || ''
  var header = Array.isArray(value)
    ? value.join(', ')
    : String(value)

  // set new header
  if ((value = append(header, field))) {
    this.header('Vary', value)
  }
}

module.exports = vary
module.exports.append = append
