import Math from './sum';

const test = new Math();

it('adds 1 + 2 to equal 3', () => {
  expect(test.sum(1, 2)).toBe(3);
});
