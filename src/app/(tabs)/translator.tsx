import React from 'react';
import {View} from 'react-native';
import styles from '@/components/Styles';
import PizzaTranslator from '@/components/Translator'

const Click = () => {
    return (
        <View style={styles.container}>
            <PizzaTranslator />
        </View>
    )
}

export default Click;