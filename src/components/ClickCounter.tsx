import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import styles from '@/components/Styles';

type State = {
  count: number,
  disabled: boolean;
};

class ClickCounter extends Component<{}, State> {
  state: State = {
    count: 0,
    disabled: false,
  };

  onPress = () => {
    if (this.state.disabled) return;

    this.setState((prevState) => ({
      count: prevState.count + 1,
      disabled: true
    }));

    setTimeout(() => {
      this.setState({ disabled: false });
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            this.state.disabled && {
              opacity: 0.5,
              ...(Platform.OS === 'web' ? { cursor: 'not-allowed' } as any : {}),
            },
          ]}
          onPress={this.onPress}
          disabled={this.state.disabled}
        >
          <Text style={styles.font}>Click me</Text>
        </TouchableOpacity>
        <Text style={styles.font}>You clicked {this.state.count} times</Text>
      </View>
    );
  }
}

export default ClickCounter;
