import { StyleSheet, Text, View,Dimensions,StatusBar,TextInput,ScrollView,Pressable } from 'react-native'
import React,{memo} from 'react'
import { Svg ,Path,Circle} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux';
import { colors, sizes } from '../constants';
const {height,width} = Dimensions.get("window");
const StackContainer = ({children,title='',isTab=false}) => {
  const navigation = useNavigation();
  const theme = useSelector(state=>state.auth.theme);
  return (
    <View style={{width:width,flex:1,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}>
      <View style={{width:width,height:62,padding:5,}}>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingLeft:13,paddingRight:13,paddingTop:11,paddingBottom:9}}>
          {isTab? <Pressable onPress={()=>{navigation.toggleDrawer()}}><Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <Path d="M21.7208 11.9167H4.27917C3.71077 11.9167 3.25 12.3775 3.25 12.9459V13.0542C3.25 13.6226 3.71077 14.0834 4.27917 14.0834H21.7208C22.2892 14.0834 22.75 13.6226 22.75 13.0542V12.9459C22.75 12.3775 22.2892 11.9167 21.7208 11.9167Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 17.3333H4.27917C3.71077 17.3333 3.25 17.794 3.25 18.3624V18.4708C3.25 19.0391 3.71077 19.4999 4.27917 19.4999H21.7208C22.2892 19.4999 22.75 19.0391 22.75 18.4708V18.3624C22.75 17.794 22.2892 17.3333 21.7208 17.3333Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 6.5H4.27917C3.71077 6.5 3.25 6.96077 3.25 7.52917V7.6375C3.25 8.20589 3.71077 8.66667 4.27917 8.66667H21.7208C22.2892 8.66667 22.75 8.20589 22.75 7.6375V7.52917C22.75 6.96077 22.2892 6.5 21.7208 6.5Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
</Svg></Pressable>:<Pressable onPress={()=>{navigation.goBack()}}>
          <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="15" cy="15" r="15" fill={theme === 'dark'?'#262E3D':colors.lightModeBg}/>
            <Path d="M20.25 14.25H11.355L14.0775 10.98C14.2048 10.8269 14.266 10.6294 14.2478 10.4311C14.2295 10.2328 14.1332 10.0498 13.98 9.92252C13.8268 9.79522 13.6294 9.73397 13.4311 9.75226C13.2327 9.77054 13.0498 9.86686 12.9225 10.02L9.1725 14.52C9.14727 14.5558 9.12471 14.5934 9.105 14.6325C9.105 14.67 9.105 14.6925 9.0525 14.73C9.01851 14.816 9.00071 14.9076 9 15C9.00071 15.0925 9.01851 15.184 9.0525 15.27C9.0525 15.3075 9.0525 15.33 9.105 15.3675C9.12471 15.4066 9.14727 15.4442 9.1725 15.48L12.9225 19.98C12.993 20.0647 13.0813 20.1328 13.1811 20.1794C13.2809 20.2261 13.3898 20.2502 13.5 20.25C13.6752 20.2504 13.8451 20.1893 13.98 20.0775C14.0559 20.0146 14.1187 19.9372 14.1647 19.85C14.2107 19.7627 14.2391 19.6672 14.2482 19.569C14.2572 19.4708 14.2468 19.3717 14.2175 19.2775C14.1882 19.1833 14.1407 19.0958 14.0775 19.02L11.355 15.75H20.25C20.4489 15.75 20.6397 15.671 20.7803 15.5304C20.921 15.3897 21 15.1989 21 15C21 14.8011 20.921 14.6103 20.7803 14.4697C20.6397 14.329 20.4489 14.25 20.25 14.25Z" fill="#DE0C77"/>
          </Svg>
        </Pressable>}
          
          <Text style={styles.tabHeaderStyle}>{title}</Text>
          <View>
          <Pressable onPress={()=>{
              navigation.navigate('Notifications');
            }}>           
<Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
  <Path d="M15 6C12.525 6 10.5 8.025 10.5 10.5C10.5 12.84 9.33 14.955 7.485 16.485C6.5625 17.25 6 18.33 6 19.5H24C24 18.33 23.46 17.25 22.515 16.485C20.67 14.955 19.5 12.84 19.5 10.5C19.5 8.025 17.4975 6 15 6ZM12.75 21.75C12.75 22.9875 13.7625 24 15 24C16.2375 24 17.25 22.9875 17.25 21.75H12.75Z" fill="#F06BA2"/>
</Svg></Pressable>
</View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:100,minHeight:sizes.height-60}} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      
    </View>
  )
}

export default memo(StackContainer)

const styles = StyleSheet.create({
  tabHeaderStyle:{fontSize:18,color:'#DE0C77',fontWeight:'500'},
  inputBox:{height:35,borderWidth:1,borderColor:'#F06BA2',borderRadius:4,width:'93%',alignSelf:'center',paddingLeft:30,paddingRight:30},
  activeBadgeText:{fontSize:12,color:'white'},
  inActiveBadgeText:{fontSize:12,color:'#BFBFBF'}
})