import { NoWhitespaceValidator } from "./validators";
import { FormControl } from "@angular/forms";

describe("validators", () => {
  it("NoWhitespaceValidator return object whitespace true", () => {
    const mockFormControl = new FormControl();
    mockFormControl.setValue("    ");
    expect(NoWhitespaceValidator(mockFormControl)).toEqual({
      whitespace: true
    });
  });
});
