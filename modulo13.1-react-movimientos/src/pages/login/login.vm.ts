export interface Credentials {
  user: string;
  password: string;
}

export const createEmpyCredentials = (): Credentials => ({
  user: "",
  password: "",
});

export interface CredentialsFormErrors {
  user: string;
  password: string;
}

export const createEmptyCredentialsFormErrors = (): CredentialsFormErrors => ({
  user: "",
  password: "",
});
