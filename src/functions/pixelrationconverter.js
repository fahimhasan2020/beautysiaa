import {PixelRatio, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const screenWidthPercentage = pixelValue => (pixelValue / width) * 100;
export const screenHeightPercentage = pixelValue => (pixelValue / height) * 100;
const pixelRatio = PixelRatio.get();
export const scaledFontSize = pixelValue =>
  PixelRatio.getPixelSizeForLayoutSize(pixelValue);
