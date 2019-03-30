import { Injectable } from "@angular/core";
import { Book } from "./../../models/book";
import { Observable, of, throwError, BehaviorSubject } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { ApiEndpoint } from "./config";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const booksApiUrl = {
  getList: `${ApiEndpoint}/books`,
  addBook: `${ApiEndpoint}/books`
};

@Injectable({
  providedIn: "root"
})
export class BooksService {
  bookList = new BehaviorSubject<Book[]>([]);

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(booksApiUrl.getList, httpOptions).pipe(
      tap(res => this.bookList.next(res["data"])),
      catchError(this.handleError)
    );
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(booksApiUrl.addBook, book, httpOptions).pipe(
      tap(res => {
        if (res["success"]) {
          let bookList = this.bookList.value;
          bookList.push(res["data"]);
          this.bookList.next(bookList);
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
