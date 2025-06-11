import React from 'react';
import { View } from 'react-native';
import Greeting from '@/components/Greeting';
import styles from '@/components/Styles';

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Aashman" />
      <Greeting name="Rishi" />
      <Greeting name="Dylan" />
      <Greeting name="Abhimanyu" />
    </View>
  );
};

export default LotsOfGreetings;