import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddbookComponent } from "./addbook.component";
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AddbookComponent", () => {
  let component: AddbookComponent;
  let fixture: ComponentFixture<AddbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddbookComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatToolbarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
