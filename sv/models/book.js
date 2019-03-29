const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  category: { type: String, require: true }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
