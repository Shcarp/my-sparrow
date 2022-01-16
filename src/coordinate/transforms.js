function transform(type, transformer) {
  transformer.type = () => type;
  return transformer;
}

export function translate(tx = 0, ty = 0) {
  return transform('translate', ([px, py]) => [px + tx, py + ty]);
}

export function scale(sx = 1, sy = 1) {
  return transform('scale', ([px, py]) => [px * sx, py * sy]);
}

export function reflect() {
  return transform('reflect', scale(-1, -1));
}

export function reflectX() {
  return transform('reflectX', scale(-1, 1));
}

export function reflectY() {
  return transform('reflectY', scale(1, -1));
}

export function transpose() {
  return transform('transpose', ([px, py]) => [py, px]);
}

/**
 * @param radius 表示到极点的坐标
 * @param theta 表示弧度
 * @returns 坐标
 */

export function polar() {
  return transform('polar', ([radius, theta]) => {
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    return [x, y];
  });
}
