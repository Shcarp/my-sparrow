import { createOrdinal } from '../../src/scale/ordinal';

describe('createOrdinal', () => {
  test('testCreateOrdinal', () => {
    const scale = createOrdinal({
      domain: ['苹果', '香蕉', '梨', '西瓜'],
      range: ['red', 'yellow', 'green'],
    });
    expect(scale('苹果')).toBe('red');
    expect(scale('香蕉')).toBe('yellow');
    expect(scale('梨')).toBe('green');
    expect(scale('西瓜')).toBe('red');
  });
});
