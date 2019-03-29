import { Component, OnInit } from "@angular/core";
import { mockBooks } from "./../../mockdata/books";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books = mockBooks;

  constructor() {}

  ngOnInit() {}
}
