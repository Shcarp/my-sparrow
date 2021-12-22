import { createOrdinal } from './ordinal';
import { band } from './utils';
// padding 是比例
export function createBand(options) {
  const { bandWidth, bandRange, step } = band(options);
  const scale = createOrdinal({ ...options, range: bandRange });

  scale.bandWidth = () => bandWidth;
  scale.step = () => step;
  return scale;
}
