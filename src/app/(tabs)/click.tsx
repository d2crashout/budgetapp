import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {styles} from '@/components/Styles';
import ClickCounter from '@/components/ClickCounter';

const Click = () => {
    return (
        <View style={styles.center}>
            <ClickCounter />
        </View>
    )
}

export default Click;