import React from 'react';
import {View} from 'react-native';
import Greeting, {styles} from '@/components/Greeting';

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