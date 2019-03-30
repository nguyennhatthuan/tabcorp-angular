import { Component, OnInit } from "@angular/core";
import { mockBooks } from "./../../../mockdata/books";
import { Book } from "./../../../models/book";
import { BooksService } from "./../../services/books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: Book[];

  getBooksFromServices(): void {
    this.bookService.getBooks().subscribe(
      res => {
        console.log(res);
        this.books = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  constructor(private bookService: BooksService) {
    if (this.books === undefined) {
      this.books = [];
    }
  }

  ngOnInit() {
    this.getBooksFromServices();
  }
}
