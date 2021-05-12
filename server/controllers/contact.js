module.exports.saveContactMessage = function saveContactMessage (req, res, next, body) {
    Default.saveContactMessage(body)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
  