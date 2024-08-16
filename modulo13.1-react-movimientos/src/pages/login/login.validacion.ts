import {
  createEmptyCredentialsFormErrors,
  CredentialsFormErrors,
} from "./login.vm";

interface ValidateResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}

export const validateForm = (
  credentials: CredentialsFormErrors
): ValidateResult => {
  let validationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };

  if (!credentials.user.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe informar el campo usuario",
    };
    validationResult.succeeded = false;
  }
  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe informar el campo contraseña",
    };
    validationResult.succeeded = false;
  }
  return validationResult;
};
