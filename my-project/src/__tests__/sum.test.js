const sum = require('../Functions/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 100 to equal 100', () => {
  expect(sum(0, 100)).toBe(100);
});

test('adds 49 + 51 to equal 100', () => {
  expect(sum(49, 51)).toBe(3);
});

test('adds -100 + -900 to equal -1000', () => {
  expect(sum(-100, -900)).toBe(-1000);
});