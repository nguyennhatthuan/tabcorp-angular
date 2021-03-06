module.exports.ResponseAsError = function ResponseAsError(res, err, code) {
  let error = err;
  if (typeof err === "object" && typeof err.message !== "undefined") {
    error = err.message;
  }

  if (typeof code !== "undefined") res.statusCode = code;
  return res.json({ success: false, message: error });
};

module.exports.ResponseAsSuccess = function ResponseAsSuccess(res, data, code) {
  let sendData = { success: true };

  if (typeof data === "object") {
    sendData = Object.assign(data, sendData);
  }

  if (typeof code !== "undefined") res.statusCode = code;

  return res.json(sendData);
};

module.exports.ThrowError = function ThrowError(message, log) {
  if (log === true) {
    console.error(message);
  }

  throw new Error(message);
};
