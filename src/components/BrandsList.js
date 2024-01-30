import { StyleSheet, Text, View,Pressable,FlatList,Animated } from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import BrandSingle from './BrandSingle'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const BrandsList = ({ brands = [] }) => {
    const { t, i18n } = useTranslation();
    const theme = useSelector((state) => state.auth.theme);
    const flatListRef = useRef(null);
    const scrollX = new Animated.Value(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (brands.length > 0) {
          flatListRef.current.scrollToIndex({
            index: (Math.floor(scrollX._value / 150) + 1) % brands.length,
          });
        }
      }, 3000); // Change the interval time as needed
  
      return () => clearInterval(interval);
    }, [brands, scrollX]);
  
    return (
      <View style={styles.brandSection}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: theme === 'dark' ? '#fff' : '#691883',
              fontWeight: 'bold',
              letterSpacing: 1.3,
            }}
          >
            {t('populaBrands')}
          </Text>
          <View style={{ width: 44, height: 3, backgroundColor: '#DE0C77', marginTop: 10 }}></View>
        </View>
        <FlatList
          ref={flatListRef}
          data={brands}
          horizontal
          renderItem={({ item, index }) => <BrandSingle brandSingle={item} position={index} />}
          keyExtractor={(item, index) => index.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={16}
          snapToAlignment="start"
          decelerationRate="fast"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          getItemLayout={(data, index) => ({
            length: 150,
            offset: 150 * index,
            index,
          })}
        />
      </View>
    );
  };

export default BrandsList

const styles = StyleSheet.create({
    brandSection:{
        padding:10,
        paddingLeft:0

    },
    brandText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#DE0C77',
        paddingLeft:10
    },
    brandTitleSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    seemoreButton:{
        backgroundColor:'#D9D9D9',
        padding:3,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5
    },
    seeMoreButtonText:{
        fontSize:10
    }
})