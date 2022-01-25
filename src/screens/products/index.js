import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

import styles from './styles'

const Products = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.screen}>
                <Text>
                    Products
                </Text>
                <Button title='Ir a detalles' onPress={() => navigation.navigate('Details')}/>
            </View>
        </SafeAreaView>
    );
};


export default Products