import { createPoint } from '../../src/scale/point';

describe('createPoint', () => {
  test('test whether it can be generated', () => {
    const scale = createPoint({
      domain: ['苹果', '香蕉', '梨'],
      range: [0, 320],
    });
    expect(scale('苹果')).toBe(80);
    expect(scale('香蕉')).toBe(160);
    expect(scale('梨')).toBe(240);
  });
});
