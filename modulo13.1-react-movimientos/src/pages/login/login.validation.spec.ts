import { validateForm } from "./login.validacion";
import { Credentials } from "./login.vm";

describe("login.validation spec", () => {
  it("Should return validation succeeded when both fields are informed", () => {
    // Arrange
    const credentials: Credentials = {
      user: "myUser",
      password: "myPassword",
    };

    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });
  it("Should return validation failed when user is empty", () => {
    // Act
    const credentials: Credentials = {
      user: "",
      password: "myPassword",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Debe informar el campo usuario");
    expect(result.errors.password).toEqual("");
  });
  it("Should return validation failed when password is empty", () => {
    // Act
    const credentials: Credentials = {
      user: "myUser",
      password: "",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("Debe informar el campo contraseña");
  });
  it("Should return validation failed when both user and password is empty", () => {
    // Act
    const credentials: Credentials = {
      user: "",
      password: "",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Debe informar el campo usuario");
    expect(result.errors.password).toEqual("Debe informar el campo contraseña");
  });
});
