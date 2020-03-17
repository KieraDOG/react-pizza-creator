export const isNotEmpty = (value) => !!value;

export const isRegexp = (value, regexp) => regexp.test(value);

export const isContact = (value) => isRegexp(value, /^04\d{8}$/)

export const isPostcode = (value) => isRegexp(value, /^\d{4}$/);

const EMAIL_REGEXP = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
export const isEmail = (value) => isRegexp(value, EMAIL_REGEXP);

export const isIdentical = (value, target) => value === target;