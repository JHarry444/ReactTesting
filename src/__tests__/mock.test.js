/* eslint-disable no-undef */
const { getAsync } = require('../main/get');

jest.mock('../main/get');

test('gonna mock some funcs', () => {
  const result = getAsync();

  expect(result).toEqual({ fullName: 'JH', age: 27 });
});
