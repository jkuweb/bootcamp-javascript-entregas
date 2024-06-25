import { onFormSubmit } from "./ui";

const form = document.getElementById("formulario");
if (form !== null && form !== undefined && form instanceof HTMLElement) {
  form.addEventListener("submit", onFormSubmit);
}