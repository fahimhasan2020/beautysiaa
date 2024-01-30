import { StyleSheet, Text, View,Dimensions,StatusBar,TextInput,ScrollView,Pressable,FlatList } from 'react-native'
import React,{memo,useMemo,useCallback,useRef,useState} from 'react'
import { useTranslation } from 'react-i18next';
import { Svg ,Path,Circle} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import baseUri from '../constants/urls'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { colors, sizes } from '../constants';
import axios from "axios"
const CategoryContainer = ({children}) => {
  const {t,i18n} = useTranslation();
  const [searchResults,setSearchResults] = useState([]);
  const [searchString,setSearchString] = useState("");

  const theme = useSelector(state=>state.auth.theme);
  const allCategories = useSelector(state=>state.auth.allCategories);
  const navigation = useNavigation();
  const handleProductSearch = (value) =>{
    setSearchString(value);
    const lowerCaseText = value.toLowerCase();
    const filtered = allCategories.filter((category) =>
      category.name.toLowerCase().includes(lowerCaseText)
    );
    console.log(filtered);
    setSearchResults(filtered);
  }

  return (
    <View style={{flex:1,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}>
      <View style={{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,padding:5}}>
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
           
            <Pressable onPress={()=>{
              navigation.navigate('Notifications');
            }}>           
<Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
  <Path d="M15 6C12.525 6 10.5 8.025 10.5 10.5C10.5 12.84 9.33 14.955 7.485 16.485C6.5625 17.25 6 18.33 6 19.5H24C24 18.33 23.46 17.25 22.515 16.485C20.67 14.955 19.5 12.84 19.5 10.5C19.5 8.025 17.4975 6 15 6ZM12.75 21.75C12.75 22.9875 13.7625 24 15 24C16.2375 24 17.25 22.9875 17.25 21.75H12.75Z" fill="#F06BA2"/>
</Svg></Pressable>

</View>
          
        </View>
        <View>
          <TextInput 
          value={searchString}
          onChangeText={(value)=>handleProductSearch(value)}
          placeholderTextColor={theme === 'dark'?colors.lightModeBg:colors.darkModeBg}
          style={[styles.inputBox,{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}]} placeholder={t('searchCategories')} /><Svg style={{position:'absolute',top:6,left:18}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <Path d="M14 14L18 18L14 14Z" fill="white"/>
  <Path d="M14 14L18 18" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
  <Path d="M2 8.85714C2 12.6442 5.07005 15.7143 8.85714 15.7143C10.7539 15.7143 12.471 14.9441 13.7123 13.6994C14.9495 12.4591 15.7143 10.7474 15.7143 8.85714C15.7143 5.07005 12.6442 2 8.85714 2C5.07005 2 2 5.07005 2 8.85714Z" fill="none" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
{searchString.length>0?<Pressable onPress={()=>{setSearchString('');setSearchResults([])}} style={{position:'absolute',top:6,right:18}}><AntDesign name="close" size={20} color="red" /></Pressable>:null}
        </View>
      </View>
      {children}
      {searchResults.length>0 && searchString.length>0?<View style={{position:'absolute',top:140,left:0,right:0,height:sizes.height,width:sizes.width,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,elevation:3}}>
      <FlatList 
      contentContainerStyle={{padding:10}}
      showsHorizontalScrollIndicator={false} 
      data={searchResults} 
      keyExtractor={(item)=>item.id.toString()}
      numColumns={3}
      renderItem={({item,index})=>(<Pressable
        onPress={()=>{
          setSearchString("");
          navigation.navigate('SingleCategory',{title:item.name,categoryId:item.id});
          setSearchResults([]);
        }}
        style={styles.listContainer}>
          <FastImage
   source={{uri:item.image?.src ? String(item.image.src) : 'https://placehold.co/400'}}
   style={styles.cardImage}
   resizeMode={FastImage.resizeMode.contain}
   />
   <View style={styles.overlay}></View>
   <Text style={styles.categoryName}>{item.name.slice(0,15)}</Text>
     </Pressable>)}     
      />
      </View>:null}
     
    </View>
  )
}

export default memo(CategoryContainer)

const styles = StyleSheet.create({
  tabHeaderStyle:{fontSize:18,color:'#DE0C77',fontWeight:'500'},
  inputBox:{height:35,borderWidth:1,borderColor:'#F06BA2',borderRadius:4,width:'93%',alignSelf:'center',paddingLeft:30,paddingRight:30},
  activeBadgeText:{fontSize:12,color:'white'},
  inActiveBadgeText:{fontSize:12,color:'#BFBFBF'},
  contentContainer:{
    backgroundColor:'#fff',
    padding:10
    
  },
  singleResultStyle:{
    fontSize:18,
    width:sizes.width/1.8,
    color:'#000',
    fontWeight:'bold'
  },
  singleResultStyleSmall:{
    fontSize:12,
    color:'#000',
    fontWeight:'bold'
  },
  singleSearchResult:{
    padding:10,
    paddingRight:30,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  singleFilter:{
    width:'100%',
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  singleFilterFont:{
    fontSize:15,
    fontWeight:'bold',
    color:"#000"
  },
  categoryName:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase'
},
cardImage:{
    width:sizes.width/3-20,
    height:sizes.width/3-20,
    borderRadius:10,
    position:'absolute',
    top:0,
    left:0,
},
overlay:{
    height:sizes.width/3-20,
    width:sizes.width/3-20,
    marginBottom:10,
    backgroundColor:'rgba(0,0,0,0.6)',
    position:'absolute',
    top:0,
    left:0,
    borderRadius:10
},
listContainer:{
    height:sizes.width/3-20,
    width:sizes.width/3-20,
    marginBottom:10,
    marginRight:10,
    backgroundColor:'#fff',
    elevation:15,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
}
})