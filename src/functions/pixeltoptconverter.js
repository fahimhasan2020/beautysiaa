import {Dimensions, PixelRatio} from 'react-native';
export const pixeltopt = pixels => {
  const deviceWidth = Dimensions.get('window').width;
  const pixelDensity = PixelRatio.get();
  const points = (pixels * 72) / (deviceWidth * pixelDensity);
  return points * 12;
};
