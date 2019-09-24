'use strict'
// const getFormFields = require('../../../lib/get-form-fields')
// for event handlers our convention is going to be  on and then the event
const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()
  $('.display').html('<img src="https://cdn.dribbble.com/users/189524/screenshots/2822794/silhouette-solo-loader-dribbble_v2.gif">')
  const data = new FormData(event.target)
  console.log(...data)
  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.log)
}
const addHandlers = function () {
  $('form').on('submit', onCreateUpload)
}

module.exports = {
  addHandlers
}
