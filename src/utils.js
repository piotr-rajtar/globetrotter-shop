export function formInputNumberParser(value) {
  const parsedValue = Number.parseInt(value, 10);

  return parsedValue;
}

export function createDate () {
  const date = new Date();

  const formatedDate = date.toString();
  return formatedDate;
}
