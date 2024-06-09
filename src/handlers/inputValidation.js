export default function inputValidation(value) {
  const newValue = value.toLowerCase().trim();
  const inputValues = newValue.split(" ");
  if (inputValues.length > 1) {
    return "The entered value is not valid";
  }
  let isValid = false;

  for (let i = 0; i < newValue.length; i++) {
    if (newValue.charAt(i) >= "a" && newValue.charAt(i) <= "z") {
      isValid = true;
    } else {
      isValid = false;
      break;
    }
  }

  return isValid || "The entered value is not valid";
}
