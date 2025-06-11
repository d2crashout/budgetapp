import React from 'react';
import { Text, View } from 'react-native';
import styles from '@/components/Styles';
 
const BudgetApp = () => {
    return (
        <View style={[styles.center, {top: 50}]}>
            <Text style={[styles.font, {color: '#FFFFFF'}]}>Welcome to the Budget App!</Text>
        </View>
    )
}

export default BudgetApp;