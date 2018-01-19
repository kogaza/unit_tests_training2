const file = require('./file');

test('adds 1 and 2 to equal 3', () => {
  expect(file.sum(1, 2)).toBe(3);
})

describe('Group', () => {
  test('product 2 and 5 to equal 10', () => {
    expect(file.product(2, 5)).toBe(10);
  })

  test('product 3 and 7 to equal 21', () => {
    expect(file.product(3, 7)).toBe(21);
  })
});

test('subtruction 6 and 2 to equal 4', () => {
  expect(file.subtraction(6,2)).toBe(4);
})
