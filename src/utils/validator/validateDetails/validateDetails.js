import { isContact, isEmail, isIdentical, isNotEmpty, isPostcode } from '../validator';

export const VALIDATION = {
  name: [{
    validator: isNotEmpty,
    message: 'Name is required',
  }],
  email: [{ 
    validator: isNotEmpty,
    message: 'Email is required',
  }, {
    validator: isEmail,
    message: 'Email is invalid',
  }],
  confirmEmail: (email) => [{
    validator: isNotEmpty,
    message: 'Confirm email is required',
  }, {
    validator: (value) => isIdentical(value, email),
    message: 'Confirm email is not same as Email',
  }],
  address: [{
    validator: isNotEmpty,
    message: 'Address is required',
  }],
  postcode: [{
    validator: isNotEmpty,
    message: 'Postcode is required',
  }, {
    validator: isPostcode,
    message: 'Postcode is invalid',
  }],
  contact: [{
    validator: isNotEmpty,
    message: 'Contact is required',
  }, {
    validator: isContact,
    message: 'Contact is invalid',
  }],
}

export default (details) => {
  let result = true;
  Object.keys(VALIDATION).forEach((key) => {
    const value = details[key];
    let validations = VALIDATION[key];

    if (key === 'confirmEmail') {
      validations = validations(details.email);
    }

    validations.forEach(({ validator }) => {
      if (validator(value)) {
        return;
      }

      result = false;
    });
  });

  return result;
}