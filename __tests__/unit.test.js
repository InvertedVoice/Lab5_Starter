// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// TODO - Part 2
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number with dash', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number missing dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-45-7890')).toBe(false);
});

test('valid email with .com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email with unusual domain', () => {
  expect(isEmail('user@abc_def.org')).toBe(true);
});
test('invalid email missing @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});
test('invalid email due to .info', () => {
  expect(isEmail('test@example.info')).toBe(false); 
});

test('valid strong password', () => {
  expect(isStrongPassword('A123_')).toBe(true);
});
test('valid strong password max length', () => {
  expect(isStrongPassword('a12345678901234')).toBe(true);
});
test('invalid password starts with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('invalid password too long', () => {
  expect(isStrongPassword('a123456789012345')).toBe(false); 
});

test('valid date with slashes', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('valid d/m/y format', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('invalid date with dashes', () => {
  expect(isDate('12-25-2023')).toBe(false);
});
test('invalid date missing year', () => {
  expect(isDate('12/25')).toBe(false);
});

test('valid 3-digit hex code with #', () => {
  expect(isHexColor('#ABC')).toBe(true);
});
test('valid 6-digit hex code without #', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});
test('invalid hex with wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('invalid hex with invalid characters', () => {
  expect(isHexColor('#12H45Z')).toBe(false);
});