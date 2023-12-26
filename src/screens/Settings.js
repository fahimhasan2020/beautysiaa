import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import StackContainer from '../components/StackContainer'
import Toggle from "react-native-toggle-element";
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const Settings = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state=>state.auth.theme);
  const { t, i18n } = useTranslation();
  const [toggleValue, setToggleValue] = useState(true);
  const [toggleNoty, setToggleNoty] = useState(true);
  const [toggleTheme, setToggleTheme] = useState(true);
  const toggleLanguage = (value)=>{
    console.log(value);
    if(value === true){
        i18n.changeLanguage('en');
    }else{
        i18n.changeLanguage('bd');
    }
    setToggleValue(value);
  }
  const toggleNotification = (value)=>{
    setToggleNoty(value);
  }
  const toggleMode = (value)=>{
    if(value){
        dispatch({type:'UPDATE_THEME',theme:'light'});
    }else{
        dispatch({type:'UPDATE_THEME',theme:'dark'});
    }
    setToggleTheme(value);
  }
  return (
   <StackContainer title={t('settings')}>
    <View style={styles.singleSettings}>
        <Text style={{color:theme==='dark'?'#fff':'#000',fontSize:14,fontWeight:'bold'}}>{t('languages')}</Text>
        <Toggle 
            value={toggleValue} 
            onPress={(val) => toggleLanguage(val)}
            leftTitle="BD"
            
            trackBar={{
                width: 50,
                height: 25,
                radius: 25,
                inActiveBackgroundColor:'#000',
                activeBackgroundColor:'#000',
                
            }}
            thumbButton={{
                width: 25,
                height: 25,
                radius: 30,
                activeBackgroundColor:'#F06BA2',
                inActiveBackgroundColor:'#F06BA2',
                activeColor:'#000',
                inActiveColor:'#fff'
            }}
            rightTitle={'EN'}
            />
     </View>
    <View style={styles.singleSettings}>
        <Text style={{color:theme==='dark'?'#fff':'#000',fontSize:14,fontWeight:'bold'}}>{t('notification')}</Text>
        <Toggle 
            value={toggleNoty} 
            onPress={(val) => toggleNotification(val)}
            leftTitle="On"
            
            trackBar={{
                width: 50,
                height: 25,
                radius: 25,
                inActiveBackgroundColor:'#000',
                activeBackgroundColor:'#000',
                
            }}
            thumbButton={{
                width: 25,
                height: 25,
                radius: 30,
                activeBackgroundColor:'#F06BA2',
                inActiveBackgroundColor:'#F06BA2',
                activeColor:'#000',
                inActiveColor:'#fff'
            }}
            rightTitle={'Off'}
            />
     </View>
    <View style={styles.singleSettings}>
        <Text style={{color:theme==='dark'?'#fff':'#000',fontSize:14,fontWeight:'bold'}}>{t('theme')}</Text>
        <Toggle 
            value={toggleTheme} 
            onPress={(val) => toggleMode(val)}            
            trackBar={{
                width: 50,
                height: 25,
                radius: 25,
                inActiveBackgroundColor:'#000',
                activeBackgroundColor:'#000',
                
            }}
            thumbButton={{
                width: 25,
                height: 25,
                radius: 30,
                activeBackgroundColor:'#F06BA2',
                inActiveBackgroundColor:'#F06BA2',
                activeColor:'#000',
                inActiveColor:'#fff'
            }}
            rightComponent={<MaterialIcons name="light-mode" />}
            leftComponent={<MaterialIcons name="dark-mode" />}
            />
     </View>
    
   </StackContainer>
  )
}

export default Settings

const styles = StyleSheet.create({
    singleSettings:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        marginHorizontal:20,
        padding:10
    }
})