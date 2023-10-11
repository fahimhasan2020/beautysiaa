import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  PrimaryInput,
  PrimaryInputGray,
  PrimaryInputGrayEx,
} from '../components/Inputs';
import NetInfo from '@react-native-community/netinfo';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { PrimaryButton, PrimaryButtonDownload } from '../components/Buttons';
import BootSplash from 'react-native-bootsplash';
import Container from '../components/Container';

const Login = () => {
  useEffect(() => {
    const init = async () => {
      
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (<NetworkProvider>
    <Container>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.brandLogo} />
      </View>
    </Container>
    </NetworkProvider>
   
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  brandLogo: {},
});

export default Login;
