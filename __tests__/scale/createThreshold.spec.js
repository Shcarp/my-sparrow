import { createThreshold } from '../../src/scale/threshold';

describe('threshold', () => {
  test('判断domain的值为两个', () => {
    const scale = createThreshold({
      domain: [1000, 10000],
      range: ['white', 'pink', 'red'],
    });
    expect(scale(900)).toBe('white');
    expect(scale(1000)).toBe('pink');
    expect(scale(2000)).toBe('pink');
    expect(scale(10000)).toBe('red');
    expect(scale(12000)).toBe('red');
  });
  test('判断domain的值为3个', () => {
    const scale = createThreshold({
      domain: [1000, 5000, 10000],
      range: ['white', 'pink', 'blue', 'red'],
    });
    expect(scale(900)).toBe('white');
    expect(scale(1000)).toBe('pink');
    expect(scale(2000)).toBe('pink');
    expect(scale(5000)).toBe('blue');
    expect(scale(6000)).toBe('blue');
    expect(scale(10000)).toBe('red');
    expect(scale(12000)).toBe('red');
  });
});
