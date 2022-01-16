import { compose } from '../utils/helper';

export function createCoordinate({
  x, y, width, height,
  transforms: coordinates = [],
}) {
  const transforms = coordinates.map((coordinate) => coordinate({
    x, y, width, height,
  })).flat();
  const output = compose(...transforms); // 复合
  // 某些场景需要获得坐标系的种类信息
  const types = transforms.map((d) => d.type());
  output.isPolar = () => types.indexOf('polar') !== -1;
  // 判断是否转置
  // 只有是偶数个‘transpose' 的时候才转置
  //  只有当 a 和 b 值不相同的时候才为 true，否者为 false
  // eslint-disable-next-line no-bitwise
  output.isTranspose = () => types.reduce((is, type) => is ^ (type === 'transpose'), false);
  output.center = () => [x + width / 2, y + height / 2];
  return output;
}
