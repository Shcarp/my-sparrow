import { createBand } from '../../src/scale/band';

describe('createBand', () => {
  test('testCreate', () => {
    const options = {
      domain: ['苹果', '香蕉', '梨'],
      range: [0, 320],
      padding: 0.2,
    };
    const scale = createBand(options);
    expect(scale('苹果')).toBe(20);
    expect(scale('香蕉')).toBe(120);
    expect(scale('梨')).toBe(220);
    expect(scale.bandWidth()).toBe(80);
    expect(scale.step()).toBe(100);
  });
});
