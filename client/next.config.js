const removeImports = require('next-remove-imports')({
    images: {
        domains: ['aws-image-uploads.s3.us-west-2.amazonaws.com', 'www.educative.io']
    }
  })
  module.exports = removeImports()