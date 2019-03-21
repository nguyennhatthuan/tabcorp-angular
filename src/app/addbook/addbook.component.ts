import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective
} from "@angular/forms";
import { mockBooks } from "./../../mockdata/books";
import { Book } from "src/models/book";
import { BookCategory } from "src/constants/category";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.css"]
})
export class AddbookComponent implements OnInit {
  category: BookCategory;
  addBookForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.addBookForm = new FormGroup({
      titleInput: new FormControl("", [Validators.required]),
      descriptionInput: new FormControl("", [Validators.required]),
      categoryInput: new FormControl("", [Validators.required])
    });
  }

  onFormSubmit(formDirective: FormGroupDirective) {
    const book = new Book();
    book.title = this.addBookForm.value.titleInput;
    book.description = this.addBookForm.value.descriptionInput;
    book.category = this.addBookForm.value.categoryInput;
    mockBooks.push(book);

    formDirective.resetForm();
    this.addBookForm.reset();
  }
}
