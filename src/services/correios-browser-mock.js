'use strict'

import ServiceError from '../errors/service.js'

/*
 * This is a mock service to be used when Browserify
 * renders the distribution file. Correios service
 * doesn't support CORS, so there's no reason to
 * include the original file with it's (heavy)
 * dependencies like "xml2js"
 */

function fetchCorreiosService (cepWithLeftPad) {
  return new Promise((resolve, reject) => {
    const serviceError = new ServiceError({
      message: 'O serviço dos Correios não aceita requests via Browser (CORS).',
      service: 'correios'
    })

    reject(serviceError)
  })
}

export default fetchCorreiosService
