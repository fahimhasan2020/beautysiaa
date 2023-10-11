import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import BootSplash from "react-native-bootsplash"
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
const Home = () => {
  useEffect(() => {
    const init = async () => {
      
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <Container>
      <TabContainer>
        <Text>Hello world</Text>
      </TabContainer>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})