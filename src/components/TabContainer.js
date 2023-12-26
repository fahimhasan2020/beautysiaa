import { StyleSheet, Text, View,Dimensions,StatusBar,TextInput,ScrollView,Pressable } from 'react-native'
import React,{memo} from 'react'
import { Svg ,Path,Circle} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { colors } from '../constants';
const TabContainer = ({children}) => {
  const theme = useSelector(state=>state.auth.theme);
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}>
      <View style={{height:128,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,padding:5}}>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingLeft:13,paddingRight:13,paddingTop:11,paddingBottom:9}}>
          <Pressable onPress={()=>{navigation.toggleDrawer()}}><Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <Path d="M21.7208 11.9167H4.27917C3.71077 11.9167 3.25 12.3775 3.25 12.9459V13.0542C3.25 13.6226 3.71077 14.0834 4.27917 14.0834H21.7208C22.2892 14.0834 22.75 13.6226 22.75 13.0542V12.9459C22.75 12.3775 22.2892 11.9167 21.7208 11.9167Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 17.3333H4.27917C3.71077 17.3333 3.25 17.794 3.25 18.3624V18.4708C3.25 19.0391 3.71077 19.4999 4.27917 19.4999H21.7208C22.2892 19.4999 22.75 19.0391 22.75 18.4708V18.3624C22.75 17.794 22.2892 17.3333 21.7208 17.3333Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 6.5H4.27917C3.71077 6.5 3.25 6.96077 3.25 7.52917V7.6375C3.25 8.20589 3.71077 8.66667 4.27917 8.66667H21.7208C22.2892 8.66667 22.75 8.20589 22.75 7.6375V7.52917C22.75 6.96077 22.2892 6.5 21.7208 6.5Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
</Svg></Pressable>
        
          <Text style={styles.tabHeaderStyle}>BEAUTYSIAA</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:70}}>
            <Pressable onPress={()=>{
              navigation.navigate('Favourites');
            }}>
               <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
  <Path d="M14 21.7501C13.9013 21.7507 13.8035 21.7318 13.7121 21.6945C13.6207 21.6571 13.5376 21.6021 13.4675 21.5326L7.64003 15.6976C6.90905 14.959 6.49902 13.9618 6.49902 12.9226C6.49902 11.8835 6.90905 10.8863 7.64003 10.1476C8.37672 9.41302 9.37465 9.00049 10.415 9.00049C11.4554 9.00049 12.4533 9.41302 13.19 10.1476L14 10.9576L14.81 10.1476C15.5467 9.41302 16.5447 9.00049 17.585 9.00049C18.6254 9.00049 19.6233 9.41302 20.36 10.1476C21.091 10.8863 21.501 11.8835 21.501 12.9226C21.501 13.9618 21.091 14.959 20.36 15.6976L14.5325 21.5326C14.4624 21.6021 14.3793 21.6571 14.288 21.6945C14.1966 21.7318 14.0987 21.7507 14 21.7501Z" fill="#F06BA2"/>
</Svg>
            </Pressable>
           
<Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
  <Path d="M15 6C12.525 6 10.5 8.025 10.5 10.5C10.5 12.84 9.33 14.955 7.485 16.485C6.5625 17.25 6 18.33 6 19.5H24C24 18.33 23.46 17.25 22.515 16.485C20.67 14.955 19.5 12.84 19.5 10.5C19.5 8.025 17.4975 6 15 6ZM12.75 21.75C12.75 22.9875 13.7625 24 15 24C16.2375 24 17.25 22.9875 17.25 21.75H12.75Z" fill="#F06BA2"/>
</Svg></View>
          
        </View>
        <View>
       
          <TextInput 
          placeholderTextColor={theme === 'dark'?colors.lightModeBg:colors.darkModeBg}
          style={[styles.inputBox,{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}]} placeholder='Search Products' /><Svg style={{position:'absolute',top:6,left:18}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <Path d="M14 14L18 18L14 14Z" fill="white"/>
  <Path d="M14 14L18 18" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
  <Path d="M2 8.85714C2 12.6442 5.07005 15.7143 8.85714 15.7143C10.7539 15.7143 12.471 14.9441 13.7123 13.6994C14.9495 12.4591 15.7143 10.7474 15.7143 8.85714C15.7143 5.07005 12.6442 2 8.85714 2C5.07005 2 2 5.07005 2 8.85714Z" fill="none" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
          <Svg style={{position:'absolute',top:6,right:18}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <Path d="M19.0469 10.8933H21.5401" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M0 10.8933H13.7326" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M8.35205 3.79443H21.54" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M0 3.79443H3.04678" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M12.0986 17.9919H21.5401" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M0 17.9919H6.78439" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M5.69955 6.31414C7.16701 6.31414 8.35663 5.12453 8.35663 3.65707C8.35663 2.18961 7.16701 1 5.69955 1C4.23209 1 3.04248 2.18961 3.04248 3.65707C3.04248 5.12453 4.23209 6.31414 5.69955 6.31414Z" fill="white" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M16.3895 13.5502C17.857 13.5502 19.0466 12.3606 19.0466 10.8932C19.0466 9.4257 17.857 8.23608 16.3895 8.23608C14.922 8.23608 13.7324 9.4257 13.7324 10.8932C13.7324 12.3606 14.922 13.5502 16.3895 13.5502Z" fill="white" stroke="#DE0C77" stroke-width="1.32854"/>
  <Path d="M9.44125 20.6491C10.9087 20.6491 12.0983 19.4595 12.0983 17.992C12.0983 16.5246 10.9087 15.335 9.44125 15.335C7.97379 15.335 6.78418 16.5246 6.78418 17.992C6.78418 19.4595 7.97379 20.6491 9.44125 20.6491Z" fill="white" stroke="#DE0C77" stroke-width="1.32854"/>
</Svg>
        </View>
        {/* <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true} contentContainerStyle={{marginLeft:13,marginRight:13,marginTop:9,height:150}}>
          <View style={{backgroundColor:'#DE0C77',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.activeBadgeText}>Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
          <View style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
            <Text style={styles.inActiveBadgeText}>Night Cream</Text>
          </View>
        </ScrollView> */}
        
      </View>
      {children}
    </View>
  )
}

export default memo(TabContainer)

const styles = StyleSheet.create({
  tabHeaderStyle:{fontSize:18,color:'#DE0C77',fontWeight:'500'},
  inputBox:{height:35,borderWidth:1,borderColor:'#F06BA2',borderRadius:4,width:'93%',alignSelf:'center',paddingLeft:30,paddingRight:30},
  activeBadgeText:{fontSize:12,color:'white'},
  inActiveBadgeText:{fontSize:12,color:'#BFBFBF'}
})