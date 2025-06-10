import React from 'react';
import {View} from 'react-native';
import {styles} from '@/components/Styles';
import ClickCounter from '@/components/ClickCounter';

const Click = () => {
    return (
        <View style={styles.container}>
            <ClickCounter />
        </View>
    )
}

export default Click;