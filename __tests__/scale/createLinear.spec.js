/* eslint-disable no-plusplus */
import { createLinear } from '../../src/scale/linear';

describe('createLinear', () => {
  test('ticks 生成标尺', () => {
    const scale = createLinear({
      domain: [0.1, 9.9],
      range: [0, 10],
    });
    const resArr = scale.ticks(6);
    const arr = [2, 4, 6, 8];
    for (let i = 0; i < arr.length; i++) {
      expect(resArr[i]).toBe(arr[i]);
    }
  });
  test('nice 操作', () => {
    const scale = createLinear({
      domain: [0.1, 9.9],
      range: [0, 10],
    });
    scale.nice(6);
    const resArr = scale.ticks(6);
    const arr = [0, 2, 4, 6, 8];
    for (let i = 0; i < arr.length; i++) {
      expect(resArr[i]).toBe(arr[i]);
    }
  });
  test('createLinear', () => {
    const scale = createLinear({
      domain: [0, 1], // 输入的范围是 [0, 1]
      range: [0, 10], // 输出的范围是 [0, 10]
    });
    expect(scale(0.2)).toBe(2);
    expect(scale(0.5)).toBe(5);
  });
});
