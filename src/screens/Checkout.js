import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native'
import React,{useState,useMemo} from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import { sizes } from '../constants'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import RadioGroup,{RadioButton} from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native'
const Checkout = () => {
const navigation = useNavigation();

const [selectedId, setSelectedId] = useState('1');
  return (
    <Container>
      <StackContainer title="Checkout">
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,paddingRight:10}}>
          <Text style={{fontSize:20,color:'#000'}}>Address</Text>
        <Text style={{fontSize:20,color:'#DE0C77'}}>Change Address</Text>
        </View>
        <TextInput editable={false} value='Firs Cottage, Adams Road, Kirk Langley, DE6
4LW' style={{width:sizes.width-20,alignSelf:'center',padding:10,borderWidth:1,borderColor:'#ccc'}} />
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10,paddingRight:10}}>
          <Text style={{fontSize:20,color:'#000'}}>Payment Method</Text>
        <Text style={{fontSize:20,color:'#DE0C77'}}>Show All</Text>
        </View>
        <View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color="#000" />
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.3}}>Cash on Delivery (COD)</Text>
            <RadioButton
            onPress={()=>setSelectedId('1')}
            selected={selectedId === '1'?true:false}
            color={selectedId === '1'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '1'?'#DE0C77':'#CCCCCC'}
            size={16}
            id="1"  />
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color="#000" />
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.3}}>Bkash/Nagad/Rocket</Text>
            <RadioButton
            onPress={()=>setSelectedId('2')}
            selected={selectedId === '2'?true:false}
            color={selectedId === '2'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '2'?'#DE0C77':'#CCCCCC'}
            size={16}
            id="2"  />
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color="#000" />
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.3}}>Card Method</Text>
            <RadioButton
            color={selectedId === '3'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '3'?'#DE0C77':'#CCCCCC'}
            onPress={()=>setSelectedId('3')}
            selected={selectedId === '3'?true:false}
            size={16}
            id="3"  />
          </View>
          
        </View>
        <View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.5,fontWeight:'bold'}}>Subtotal</Text>
            <Text style={{fontSize:16,color:'#DE0C77'}}>৳ 1560.00</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.5}}>Delivery Charges</Text>
            <Text style={{fontSize:16,color:'#DE0C77'}}>৳ 50.00</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.5}}>Vat & taxes</Text>
            <Text style={{fontSize:16,color:'#DE0C77'}}>৳ 0.00</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:'#000',width:sizes.width/1.5,fontWeight:'bold'}}>Total Amounts</Text>
            <Text style={{fontSize:16,color:'#DE0C77'}}>৳ 1610.00</Text>
          </View>
          
          
        </View>
        <Pressable onPress={()=>{
        navigation.navigate('Success');
      }}  style={{backgroundColor:'#691883',width:sizes.width-30,borderRadius:10,elevation:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'#FFFFFF'}}>Order Confirmed</Text>
      </Pressable>
        <Pressable onPress={()=>{
        navigation.navigate('Home');
      }}  style={{marginTop:10,borderWidth:1,borderColor:'#691883',width:sizes.width-30,borderRadius:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'#691883'}}>Continue Shopping</Text>
      </Pressable>
      </StackContainer>
      
    </Container>
  )
}

export default Checkout

const styles = StyleSheet.create({})