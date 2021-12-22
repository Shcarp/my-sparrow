import { createTime } from '../../src/scale/time';

describe('createOrdinal', () => {
  test('testCreateOrdinal', () => {
    const map = createTime({
      domain: [new Date(2000, 0, 1), new Date(2000, 0, 2)],
      range: [0, 960],
    });
    expect(map(new Date(2000, 0, 1, 5))).toBe(200);
    expect(map(new Date(2000, 0, 1, 16))).toBe(640);
    expect(map(new Date(2000, 0, 2))).toBe(960);
  });
});
