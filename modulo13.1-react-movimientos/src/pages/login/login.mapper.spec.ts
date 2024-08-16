import * as apiModel from "./api";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as viewModel from "./login.vm";

describe("login.mapper spec", () => {
  it("should return a credentials with same properties", () => {
    //Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myUser",
      password: "myPassword",
    };
    const expectedApiCredentials: apiModel.Credentials = {
      user: "myUser",
      password: "myPassword",
    };

    // Act
    const result: apiModel.Credentials =
      mapCredentialsFromVmToApi(vmCredentials);
    // Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
