import styles from '@/components/Styles';
import React from 'react';
import { View } from 'react-native';
import ReactInfo from '@/components/ReactInfo';


const reactinfo = () => {
    return (
        <View style={styles.container}>
            <ReactInfo />
        </View>
    )
}

export default reactinfo;