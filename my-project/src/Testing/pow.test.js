const pow = require('../Functions/pow');

test('pow 4 to equal 16', () => {
  expect(pow(4)).toBe(16);
});

test('pow 2 to equal 4', () => {
    expect(pow(2)).toBe(4);
  });

  test('pow 3 to equal 9', () => {
    expect(pow(3)).toBe(9);
  });

  
  test('pow 1 to equal 1', () => {
    expect(pow(1)).toBe(1);
  });
  