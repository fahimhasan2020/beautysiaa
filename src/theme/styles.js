import {colors, sizes} from '../constants';
import {pixeltopt} from '../functions/pixeltoptconverter';

export const baseContainer = {
  flex: 1,
  backgroundColor: colors.white,
};
export const flexRow = {
  flexDirection: 'row',
};
export const justifyBetween = {
  justifyContent: 'space-between',
};
export const justifyCenter = {
  justifyContent: 'center',
};
export const bottomBorder = {
  borderBottomWidth: 1,
  borderBottomColor: colors.grey,
  paddingBottom: 5,
};
export const primaryButton = {
  width: sizes.width - 50,
  alignSelf: 'center',
  height: pixeltopt(48),
  margin: sizes.mr,
  borderRadius: 7,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.primary,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  marginBottom: 40,
};

export const primaryInput = {
  padding: sizes.pdxl,
  width: sizes.width - 50,
  alignSelf: 'center',
  margin: sizes.mr,
  borderRadius: 7,
  backgroundColor: '#F3F2F2',
};

export const primaryInputShort = {
  padding: sizes.pdxl,
  width: sizes.width - 250,
  alignSelf: 'center',
  margin: sizes.mr,
  borderRadius: 7,
  backgroundColor: '#F3F2F2',
};
export const primaryInputTextArea = {
  textAlignVertical: 'top',
  padding: sizes.pdxl,
  width: sizes.width - 50,
  height: pixeltopt(130),
  alignSelf: 'center',
  margin: sizes.mr,
  borderRadius: 7,
  backgroundColor: '#F3F2F2',
};
export const primaryInputGrey = {
  padding: sizes.pdxl,
  width: sizes.width - 50,
  alignSelf: 'center',
  margin: sizes.mr,
  borderRadius: 7,
  color: colors.black,
  opacity: 0.5,
  backgroundColor: '#F3F2F2',
};

export const primaryInputGreyShort = {
  padding: sizes.pdxl,
  width: sizes.width - 250,
  alignSelf: 'center',
  margin: sizes.mr,
  borderRadius: 7,
  color: colors.black,
  backgroundColor: 'white',
};

export const authHeader = {
  with: sizes.width,
  padding: sizes.pdxl,
  backgroundColor: colors.navHeader,
  height: sizes.height * 0.35,
  borderBottomLeftRadius: 100,
  borderBottomRightRadius: 100,
  alignItems: 'center',
  paddingTop: 30,
};
