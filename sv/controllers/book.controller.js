const ObjectId = require("mongodb").ObjectID;
const Book = require("../models/book");
const { ResponseAsError, ResponseAsSuccess } = require("../utils/response");

const ping = function ping(req, res) {
  return ResponseAsSuccess(res, {
    data: {
      message: "Book Controller"
    }
  });
};

const get = function get(req, res) {
  Book.find({}, function(err, data) {
    if (err) ResponseAsError(res, err.message);
    return ResponseAsSuccess(res, { data: data });
  });
};

const create = function create(req, res) {
  const { body } = req;
  Book.create(body, function(err, data) {
    if (err) ResponseAsError(res, err.message);

    return ResponseAsSuccess(res, { data: data });
  });
};

const remove = function remove(req, res) {
  const { id } = req.params;
  Book.findByIdAndDelete(new ObjectId(id), function(err, data) {
    if (err) ResponseAsError(res, err.message);

    return ResponseAsSuccess(res, { data: data });
  });
};

const removeAll = function removeAll(req, res) {
  Book.remove({}, function(err, data) {
    if (err) ResponseAsError(res, err.message);

    return ResponseAsSuccess(res, {
      data: {
        message: "Delete successfully"
      }
    });
  });
};

const getCategories = function getCategories(req, res) {
  const data = [
    { id: "1", name: "Drama" },
    { id: "2", name: "Comedy" },
    { id: "3", name: "Sport" }
  ];
  return ResponseAsSuccess(res, { data: data });
};
module.exports = {
  get,
  create,
  remove,
  removeAll,
  getCategories,
  ping
};
