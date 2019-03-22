import { BookCategory } from "src/constants/category";

export class Book {
  id: Number;
  title: String;
  category: BookCategory;
  description: String;

  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.category = BookCategory.Drama;
  }
}
