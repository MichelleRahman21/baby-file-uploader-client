'use strict'

const onUploadSuccess = function (data) {
  // $('.display').html('<img src="' + data.fileUpload.url + '">')
  $('.display').html(`<img src="${data.fileUpload.url}">`)
}

module.exports = {
  onUploadSuccess
}
