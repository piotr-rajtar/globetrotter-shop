export function formInputNumberParser(value) {
  const parsedValue = Number.parseInt(value, 10);

  return parsedValue;
}

export function createDate () {
  const date = new Date();

  const formatedDate = date.toString();
  return formatedDate;
}

export function emailParser (email) {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailPattern.test(email);
}

export function phoneParser (phone) {
  const phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

  return phonePattern.test(phone);
}

export function nameParser (name) {
  const namePattern = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g;

  return namePattern.test(name);
}
