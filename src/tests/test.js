const { sum, subtract } = require('../assets/js/math')

test('sum function adds two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract function subtracts two numbers', () => {
  expect(subtract(3, 2)).toBe(1)
})