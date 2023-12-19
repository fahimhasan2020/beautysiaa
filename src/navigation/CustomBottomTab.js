import React, { useState, useMemo,useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { interpolatePath } from 'react-native-redash';
import usePath from '../utils/usePath';
import { getPathXCenter } from '../utils/Path';
import TabItem from './TabItem';
import AnimatedCircle from './AnimatedCiscle';
import { sizes } from '../constants';
import { useSelector,useDispatch } from 'react-redux';
const AnimatedPath = Animated.createAnimatedComponent(Path);

const CustomBottomTab = ({ state, descriptors, navigation }) => {
  const { containerPath, curvedPaths, tHeight } = usePath();
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);
  const loggedIn = useSelector(state=>state.auth.loggedIn);
  const handleMoveCircle = (currentPath) => {
    circleXCoordinate.value = getPathXCenter(currentPath);
  };

  const selectIcon = (routeName) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Categories':
        return 'grid';
      case 'Cart':
        return 'shopping-cart';
      case 'Offers':
        return 'star';
      case 'Profile':
        return 'user';
      default:
        return 'home';
    }
  };

  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({ length: curvedPaths.length }, (_, index) => index + 1),
      curvedPaths
    );
    runOnJS(handleMoveCircle)(currentPath);
    return {
      d: `${containerPath} ${currentPath}`,
    };
  });

  const handleTabPress = (index, tab) => {
    console.log(index);
    if(index === 5){
      if(!loggedIn){
        navigation.navigate('Login');
      }else{
        navigation.navigate(tab);
        progress.value = withTiming(index);
      }
    }else{
      navigation.navigate(tab);
      progress.value = withTiming(index);
    }
    
    
  };

  useEffect(() => {
    progress.value = withTiming(0);
  }, []);

  return (
    <View style={styles.tabBarContainer}>
      <Svg width={sizes.width} height={tHeight} style={styles.shadowMd}>
        <AnimatedPath fill={'#000'} animatedProps={animatedProps} />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinate} />
      <View
        style={[
          styles.tabItemsContainer,
          {
            height: tHeight,
          },
        ]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label}
              icon={selectIcon(route.name)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() => handleTabPress(index + 1, route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  tabItemsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
  },
  shadowMd: {
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
});