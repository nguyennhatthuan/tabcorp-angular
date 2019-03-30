import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BooksComponent } from "./books.component";
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatIconModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("BooksComponent", () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
