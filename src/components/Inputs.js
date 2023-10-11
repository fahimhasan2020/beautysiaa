import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import React from 'react';
import {
  primaryInputGrey,
  primaryInput,
  primaryInputTextArea,
  primaryInputShort,
  primaryInputGreyShort,
} from '../theme/styles';
import {colors, sizes, typo} from '../constants';
import {pixeltopt} from '../functions/pixeltoptconverter';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const PrimaryInput = ({
  placeholder,
  onChangeText,
  getFocus,
  data = '',
  dateIcon = false,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        value={data}
        onFocus={getFocus}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInput, typo.placeholder]}
        placeholderTextColor={colors.lightBlack}
      />
      {dateIcon ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          style={{position: 'absolute', right: 35, top: 20}}>
          <Path
            d="M0.000699097 3.31836C4.21666 3.31836 8.41764 3.31836 12.634 3.31836C12.634 3.38333 12.634 3.44089 12.634 3.49878C12.634 5.70425 12.634 7.90939 12.634 10.1149C12.634 10.8429 12.089 11.3859 11.3315 11.4122C11.2793 11.4138 11.227 11.4135 11.1747 11.4135C7.8511 11.4135 4.52781 11.4048 1.20417 11.4196C0.355049 11.4233 -0.00104299 10.8759 2.29409e-06 10.2509C0.00244128 8.38637 0.000699097 6.52188 0.000699097 4.6574C0.000699097 4.21576 0.000699097 3.77379 0.000699097 3.31836ZM9.30579 4.72169C9.15805 4.72169 9.01032 4.72169 8.86224 4.72169C8.85353 4.72169 8.84482 4.72169 8.8361 4.72169C8.63228 4.7264 8.50719 4.83445 8.50266 5.03204C8.49569 5.34273 8.49604 5.65376 8.50266 5.96445C8.50684 6.15666 8.62287 6.27279 8.82147 6.27716C9.15178 6.28457 9.48244 6.28491 9.8124 6.27582C10.0162 6.2701 10.112 6.16541 10.1141 5.97018C10.1173 5.65949 10.1173 5.34846 10.1141 5.03777C10.112 4.84186 9.99044 4.72573 9.78801 4.72236C9.62738 4.71967 9.46676 4.72169 9.30579 4.72169ZM6.16019 9.70016C6.32116 9.70016 6.48179 9.70218 6.64276 9.69948C6.84868 9.69612 6.95843 9.60759 6.96436 9.41336C6.97411 9.09022 6.97342 8.76674 6.9654 8.44325C6.96087 8.26216 6.84554 8.14906 6.66123 8.14468C6.32674 8.13694 5.9919 8.1366 5.65741 8.14535C5.46786 8.1504 5.35846 8.27259 5.35672 8.45907C5.35393 8.76976 5.35358 9.08079 5.35706 9.39148C5.35915 9.57931 5.4811 9.69443 5.67797 9.69881C5.83859 9.70285 5.99921 9.69982 6.16019 9.70016ZM9.30892 9.69982C9.46989 9.69982 9.63052 9.70218 9.79149 9.69915C10.0065 9.69544 10.1127 9.5948 10.1145 9.38812C10.1173 9.08147 10.1169 8.77482 10.1148 8.46816C10.1134 8.26956 9.99985 8.14771 9.79672 8.14333C9.47094 8.1366 9.14446 8.1366 8.81868 8.14367C8.62705 8.14771 8.50789 8.26115 8.50371 8.44628C8.49639 8.76539 8.49569 9.08483 8.50475 9.4036C8.50998 9.58739 8.63646 9.69477 8.82635 9.69881C8.98697 9.70251 9.14795 9.69982 9.30892 9.69982ZM5.35567 5.49387C5.35567 5.64501 5.35428 5.79615 5.35602 5.94729C5.35881 6.15363 5.46891 6.27313 5.68145 6.27784C6.00305 6.28491 6.32465 6.28457 6.64624 6.27784C6.856 6.27346 6.95913 6.1819 6.96436 5.98734C6.97342 5.6642 6.97342 5.34071 6.96436 5.01757C6.95913 4.8321 6.83439 4.72438 6.64415 4.7227C6.32255 4.71967 6.00096 4.71967 5.67936 4.7227C5.47762 4.72438 5.3602 4.84219 5.35637 5.04046C5.35358 5.19126 5.35567 5.34273 5.35567 5.49387ZM2.24631 8.92663C2.24631 9.07776 2.24422 9.22924 2.24701 9.38038C2.25049 9.57763 2.36896 9.69645 2.5707 9.69881C2.8794 9.70218 3.18811 9.70218 3.49681 9.69881C3.71005 9.69679 3.85256 9.57023 3.85813 9.36321C3.86615 9.06093 3.8651 8.75798 3.85813 8.45571C3.8536 8.26249 3.73618 8.14737 3.53897 8.14367C3.21285 8.13727 2.88672 8.13694 2.56059 8.14401C2.36268 8.14838 2.25084 8.26855 2.24735 8.46008C2.24387 8.6156 2.24631 8.77111 2.24631 8.92663ZM2.24631 5.49354C2.24631 5.64905 2.24422 5.80456 2.24701 5.96008C2.25014 6.14656 2.35572 6.26909 2.54665 6.27515C2.87243 6.28524 3.19891 6.28457 3.52469 6.27515C3.71632 6.26976 3.84838 6.14892 3.855 5.96445C3.86615 5.64131 3.8644 5.31749 3.85186 4.99434C3.84524 4.82402 3.71667 4.72472 3.53653 4.72303C3.21459 4.72034 2.89299 4.72001 2.57104 4.72303C2.3693 4.72472 2.25049 4.84287 2.24701 5.04012C2.24422 5.19092 2.24631 5.3424 2.24631 5.49354Z"
            fill="#6D6D6D"
          />
          <Path
            d="M12.5939 2.50694C8.39396 2.50694 4.20169 2.50694 0.0216148 2.50694C0.0216148 1.97308 -0.00138134 1.44662 0.0285834 0.92319C0.0536701 0.485933 0.423351 -0.0233589 1.1202 0.00121365C1.43344 0.0123218 1.74737 0.00323336 2.06096 0.00323336C2.10346 0.00323336 2.14562 0.00323336 2.20346 0.00323336C2.20346 0.10388 2.20346 0.191062 2.20346 0.278244C2.20346 0.543493 2.20277 0.808405 2.20381 1.07365C2.20451 1.35035 2.35886 1.52337 2.60172 1.52202C2.84074 1.52067 2.99126 1.35169 2.9923 1.08106C2.9937 0.773735 2.99265 0.466409 2.99265 0.159421C2.99265 0.113642 2.99265 0.0678625 2.99265 0.0126584C5.09192 0.0126584 7.18004 0.0126584 9.28106 0.0126584C9.28349 0.0577642 9.28802 0.102533 9.28802 0.146966C9.28872 0.475161 9.28558 0.803693 9.29011 1.13189C9.29255 1.3214 9.40649 1.46345 9.57722 1.51024C9.73366 1.55299 9.91833 1.49879 10.0009 1.35977C10.0483 1.28067 10.072 1.17868 10.0744 1.08611C10.0831 0.774744 10.0779 0.46338 10.0779 0.151679C10.0779 0.106573 10.0779 0.0614669 10.0779 0.00356992C10.4674 0.00356992 10.8413 -0.00686497 11.2141 0.00794589C11.3977 0.0153513 11.5904 0.0436266 11.7601 0.108592C12.1873 0.271848 12.4929 0.555274 12.5845 1.01239C12.5887 1.03292 12.5929 1.05413 12.5929 1.075C12.5942 1.54928 12.5939 2.02424 12.5939 2.50694Z"
            fill="#6D6D6D"
          />
        </Svg>
      ) : null}
    </View>
  );
};
export const PrimaryInputEx = ({
  placeholder,
  onChangeText,
  getFocus,
  data = '',
  dateIcon = false,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        editable={false}
        keyboardType={keyboardType}
        value={data}
        onFocus={getFocus}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInput, typo.placeholder]}
        placeholderTextColor={colors.lightBlack}
      />
      {dateIcon ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          style={{position: 'absolute', right: 35, top: 20}}>
          <Path
            d="M0.000699097 3.31836C4.21666 3.31836 8.41764 3.31836 12.634 3.31836C12.634 3.38333 12.634 3.44089 12.634 3.49878C12.634 5.70425 12.634 7.90939 12.634 10.1149C12.634 10.8429 12.089 11.3859 11.3315 11.4122C11.2793 11.4138 11.227 11.4135 11.1747 11.4135C7.8511 11.4135 4.52781 11.4048 1.20417 11.4196C0.355049 11.4233 -0.00104299 10.8759 2.29409e-06 10.2509C0.00244128 8.38637 0.000699097 6.52188 0.000699097 4.6574C0.000699097 4.21576 0.000699097 3.77379 0.000699097 3.31836ZM9.30579 4.72169C9.15805 4.72169 9.01032 4.72169 8.86224 4.72169C8.85353 4.72169 8.84482 4.72169 8.8361 4.72169C8.63228 4.7264 8.50719 4.83445 8.50266 5.03204C8.49569 5.34273 8.49604 5.65376 8.50266 5.96445C8.50684 6.15666 8.62287 6.27279 8.82147 6.27716C9.15178 6.28457 9.48244 6.28491 9.8124 6.27582C10.0162 6.2701 10.112 6.16541 10.1141 5.97018C10.1173 5.65949 10.1173 5.34846 10.1141 5.03777C10.112 4.84186 9.99044 4.72573 9.78801 4.72236C9.62738 4.71967 9.46676 4.72169 9.30579 4.72169ZM6.16019 9.70016C6.32116 9.70016 6.48179 9.70218 6.64276 9.69948C6.84868 9.69612 6.95843 9.60759 6.96436 9.41336C6.97411 9.09022 6.97342 8.76674 6.9654 8.44325C6.96087 8.26216 6.84554 8.14906 6.66123 8.14468C6.32674 8.13694 5.9919 8.1366 5.65741 8.14535C5.46786 8.1504 5.35846 8.27259 5.35672 8.45907C5.35393 8.76976 5.35358 9.08079 5.35706 9.39148C5.35915 9.57931 5.4811 9.69443 5.67797 9.69881C5.83859 9.70285 5.99921 9.69982 6.16019 9.70016ZM9.30892 9.69982C9.46989 9.69982 9.63052 9.70218 9.79149 9.69915C10.0065 9.69544 10.1127 9.5948 10.1145 9.38812C10.1173 9.08147 10.1169 8.77482 10.1148 8.46816C10.1134 8.26956 9.99985 8.14771 9.79672 8.14333C9.47094 8.1366 9.14446 8.1366 8.81868 8.14367C8.62705 8.14771 8.50789 8.26115 8.50371 8.44628C8.49639 8.76539 8.49569 9.08483 8.50475 9.4036C8.50998 9.58739 8.63646 9.69477 8.82635 9.69881C8.98697 9.70251 9.14795 9.69982 9.30892 9.69982ZM5.35567 5.49387C5.35567 5.64501 5.35428 5.79615 5.35602 5.94729C5.35881 6.15363 5.46891 6.27313 5.68145 6.27784C6.00305 6.28491 6.32465 6.28457 6.64624 6.27784C6.856 6.27346 6.95913 6.1819 6.96436 5.98734C6.97342 5.6642 6.97342 5.34071 6.96436 5.01757C6.95913 4.8321 6.83439 4.72438 6.64415 4.7227C6.32255 4.71967 6.00096 4.71967 5.67936 4.7227C5.47762 4.72438 5.3602 4.84219 5.35637 5.04046C5.35358 5.19126 5.35567 5.34273 5.35567 5.49387ZM2.24631 8.92663C2.24631 9.07776 2.24422 9.22924 2.24701 9.38038C2.25049 9.57763 2.36896 9.69645 2.5707 9.69881C2.8794 9.70218 3.18811 9.70218 3.49681 9.69881C3.71005 9.69679 3.85256 9.57023 3.85813 9.36321C3.86615 9.06093 3.8651 8.75798 3.85813 8.45571C3.8536 8.26249 3.73618 8.14737 3.53897 8.14367C3.21285 8.13727 2.88672 8.13694 2.56059 8.14401C2.36268 8.14838 2.25084 8.26855 2.24735 8.46008C2.24387 8.6156 2.24631 8.77111 2.24631 8.92663ZM2.24631 5.49354C2.24631 5.64905 2.24422 5.80456 2.24701 5.96008C2.25014 6.14656 2.35572 6.26909 2.54665 6.27515C2.87243 6.28524 3.19891 6.28457 3.52469 6.27515C3.71632 6.26976 3.84838 6.14892 3.855 5.96445C3.86615 5.64131 3.8644 5.31749 3.85186 4.99434C3.84524 4.82402 3.71667 4.72472 3.53653 4.72303C3.21459 4.72034 2.89299 4.72001 2.57104 4.72303C2.3693 4.72472 2.25049 4.84287 2.24701 5.04012C2.24422 5.19092 2.24631 5.3424 2.24631 5.49354Z"
            fill="#6D6D6D"
          />
          <Path
            d="M12.5939 2.50694C8.39396 2.50694 4.20169 2.50694 0.0216148 2.50694C0.0216148 1.97308 -0.00138134 1.44662 0.0285834 0.92319C0.0536701 0.485933 0.423351 -0.0233589 1.1202 0.00121365C1.43344 0.0123218 1.74737 0.00323336 2.06096 0.00323336C2.10346 0.00323336 2.14562 0.00323336 2.20346 0.00323336C2.20346 0.10388 2.20346 0.191062 2.20346 0.278244C2.20346 0.543493 2.20277 0.808405 2.20381 1.07365C2.20451 1.35035 2.35886 1.52337 2.60172 1.52202C2.84074 1.52067 2.99126 1.35169 2.9923 1.08106C2.9937 0.773735 2.99265 0.466409 2.99265 0.159421C2.99265 0.113642 2.99265 0.0678625 2.99265 0.0126584C5.09192 0.0126584 7.18004 0.0126584 9.28106 0.0126584C9.28349 0.0577642 9.28802 0.102533 9.28802 0.146966C9.28872 0.475161 9.28558 0.803693 9.29011 1.13189C9.29255 1.3214 9.40649 1.46345 9.57722 1.51024C9.73366 1.55299 9.91833 1.49879 10.0009 1.35977C10.0483 1.28067 10.072 1.17868 10.0744 1.08611C10.0831 0.774744 10.0779 0.46338 10.0779 0.151679C10.0779 0.106573 10.0779 0.0614669 10.0779 0.00356992C10.4674 0.00356992 10.8413 -0.00686497 11.2141 0.00794589C11.3977 0.0153513 11.5904 0.0436266 11.7601 0.108592C12.1873 0.271848 12.4929 0.555274 12.5845 1.01239C12.5887 1.03292 12.5929 1.05413 12.5929 1.075C12.5942 1.54928 12.5939 2.02424 12.5939 2.50694Z"
            fill="#6D6D6D"
          />
        </Svg>
      ) : null}
    </View>
  );
};
export const PrimaryInputSelect = ({
  placeholder,
  onChangeText,
  data = '',
  onFocus,
}) => {
  return (
    <View>
      <TextInput
        onFocus={onFocus}
        value={data}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInput, typo.placeholder]}
        placeholderTextColor={colors.black}
      />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        style={{position: 'absolute', right: 35, top: 25}}>
        <Path
          opacity="0.5"
          d="M12.0036 0.920743C11.8829 0.573058 11.5945 0.362111 11.3326 0.136512C11.1188 -0.0477686 10.773 -0.027579 10.5515 0.149679C10.5001 0.190796 10.453 0.237652 10.4062 0.284508C8.9795 1.71208 7.55282 3.13965 6.12705 4.56813C6.09452 4.60069 6.0718 4.6429 6.04023 4.68666C5.98386 4.63386 5.95016 4.60339 5.91767 4.5714C4.46842 3.14459 3.01917 1.71747 1.56961 0.290951C1.31096 0.0365511 0.993204 -0.0397342 0.736362 0.151909C0.499908 0.328319 0.286525 0.548573 0.107079 0.782629C-0.0614345 1.0027 -0.0104824 1.29825 0.169874 1.51448C0.197172 1.5471 0.226298 1.57879 0.256638 1.60867C2.00776 3.33335 3.75857 5.05773 5.50999 6.7821C5.77232 7.04042 6.07717 7.09555 6.35824 6.93138C6.42767 6.8908 6.49001 6.83449 6.54716 6.77729C8.28515 5.03967 10.0235 3.30205 11.7562 1.55931C11.8614 1.45373 11.9228 1.3053 12.0044 1.17679C12.0043 1.09134 12.004 1.00589 12.0036 0.920743Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};
export const PrimaryInputWhite = ({
  placeholder,
  data = '',
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        value={data}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[primaryInput, typo.placeholder, {backgroundColor: '#fff'}]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};
export const PrimaryInputWhiteEx = ({
  placeholder,
  data = '',
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        editable={false}
        value={data}
        placeholder={placeholder}
        style={[primaryInput, typo.placeholder, {backgroundColor: '#fff'}]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};
export const PrimaryInputWhiteShort = ({
  placeholder,
  data = '',
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        value={data}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputShort, typo.placeholder, {backgroundColor: '#fff'}]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};
export const PrimaryInputWhiteLocation = ({
  placeholder,
  data = '',
  onChangeText,
}) => {
  return (
    <View style={{height: 60}}>
      <TextInput
        value={data}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[
          primaryInput,
          typo.placeholder,
          {backgroundColor: '#fff', paddingLeft: 40},
        ]}
        placeholderTextColor={'#ccc'}
      />
      <AntDesign
        name={'search1'}
        size={20}
        color={colors.primary}
        style={{position: 'absolute', top: 20, left: 20}}
      />
    </View>
  );
};
export const PrimaryInputTextArea = ({
  placeholder,
  onChangeText,
  data = '',
}) => {
  return (
    <View>
      <TextInput
        multiline={true}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputTextArea, typo.placeholder]}
        placeholderTextColor={colors.black}
        value={data}
      />
    </View>
  );
};
export const PrimaryInputTextAreaWhite = ({
  placeholder,
  data = '',
  onChangeText,
}) => {
  return (
    <View>
      <TextInput
        value={data}
        multiline={true}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[
          primaryInputTextArea,
          typo.placeholder,
          {backgroundColor: '#fff'},
        ]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};
export const PrimaryInputTextAreaWhiteEx = ({
  placeholder,
  data = '',
  onChangeText,
}) => {
  return (
    <View>
      <TextInput
        multiline={true}
        value={data}
        editable={false}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[
          primaryInputTextArea,
          typo.placeholder,
          {backgroundColor: '#fff'},
        ]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};

export const PrimaryInputTextAreaWhiteGray = ({placeholder, onChangeText}) => {
  return (
    <View>
      <TextInput
        multiline={true}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[
          primaryInputTextArea,
          typo.placeholder,
          {backgroundColor: '#F3F2F2'},
        ]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};
export const PrimaryInputTextAreaWhiteGrayEx = ({
  placeholder,
  data = '',
  onChangeText,
}) => {
  return (
    <View>
      <TextInput
        value={data}
        editable={false}
        multiline={true}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[
          primaryInputTextArea,
          typo.placeholder,
          {backgroundColor: '#F3F2F2'},
        ]}
        placeholderTextColor={colors.lightBlack}
      />
    </View>
  );
};

export const PrimaryInputGrey = ({
  placeholder,
  onChangeText,
  data = '',
  getFocus,
}) => {
  return (
    <View>
      <TextInput
        onFocus={getFocus}
        value={data}
        keyboardType="numeric"
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputGrey, typo.placeholder]}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};
export const PrimaryInputGray = ({
  placeholder,
  onChangeText,
  data = '',
  getFocus,
}) => {
  return (
    <View>
      <TextInput
        onFocus={getFocus}
        value={data}
        keyboardType="default"
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputGrey, typo.placeholder]}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};
export const PrimaryInputGrayEx = ({
  placeholder,
  onChangeText,
  data = '',
  getFocus,
}) => {
  return (
    <View>
      <TextInput
        editable={false}
        onFocus={getFocus}
        value={data}
        keyboardType="default"
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputGrey, typo.placeholder]}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};
export const PrimaryInputGrayShort = ({
  placeholder,
  onChangeText,
  data = '',
  getFocus,
}) => {
  return (
    <View>
      <TextInput
        onFocus={getFocus}
        value={data}
        keyboardType="default"
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        style={[primaryInputGreyShort, typo.placeholder]}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};

export const Uploader = ({placeholder, value, onPress}) => {
  return (
    <View
      style={{
        width: sizes.width - 52,
        backgroundColor: '#F3F2F2',
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 7,
        marginBottom: 10,
      }}>
      <View
        style={{
          width: sizes.width - 52 - pixeltopt(120),
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        {value === '' ? (
          <Text style={{color: colors.black, opacity: 0.7}}>{placeholder}</Text>
        ) : (
          <Text style={{color: colors.black}}>
            {value.length > 20 ? value.slice(0, 20) + '...' : value}
          </Text>
        )}
      </View>
      <Pressable
        onPress={onPress}
        style={{
          width: pixeltopt(120),
          padding: 15,
          backgroundColor: colors.green,
          flexDirection: 'row',
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        }}>
        <AntDesign name="cloudupload" color={'#fff'} size={20} />
        <Text style={{color: '#fff', marginLeft: 10}}>Upload</Text>
      </Pressable>
    </View>
  );
};
export const UploaderWhite = ({placeholder, value, onPress}) => {
  return (
    <View
      style={{
        width: sizes.width - 52,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 7,
        marginBottom: 10,
      }}>
      <View
        style={{
          width: sizes.width - 52 - pixeltopt(120),
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        {value === '' ? (
          <Text style={{color: colors.black, opacity: 0.7}}>{placeholder}</Text>
        ) : (
          <Text style={{color: colors.black}}>
            {value.length > 20 ? value.slice(0, 20) + '...' : value}
          </Text>
        )}
      </View>
      <Pressable
        onPress={onPress}
        style={{
          width: pixeltopt(120),
          padding: 15,
          backgroundColor: colors.green,
          flexDirection: 'row',
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        }}>
        <AntDesign name="cloudupload" color={'#fff'} size={20} />
        <Text style={{color: '#fff', marginLeft: 10}}>Upload</Text>
      </Pressable>
    </View>
  );
};
export const ViewPhoto = ({placeholder, value, onPress}) => {
  return (
    <View
      style={{
        width: sizes.width - 52,
        backgroundColor: '#F3F2F2',
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 7,
      }}>
      <View
        style={{
          width: sizes.width - 52 - pixeltopt(120),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {value === '' ? (
          <Text style={{color: colors.black}}>{placeholder}</Text>
        ) : (
          <Text style={{color: colors.black}}>
            {value.length > 20 ? value.slice(0, 20) + '...' : value}
          </Text>
        )}
      </View>
      <Pressable
        onPress={onPress}
        style={{
          width: pixeltopt(120),
          padding: 15,
          backgroundColor: colors.green,
          flexDirection: 'row',
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        }}>
        <Fontisto name="photograph" color={'#fff'} size={20} />
        <Text style={{color: '#fff', marginLeft: 10}}>View</Text>
      </Pressable>
    </View>
  );
};
