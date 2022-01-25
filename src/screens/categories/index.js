import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

import styles from './styles';

const Categories = ( { navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.screen}>
                <Text>
                    Categories
                    
                </Text>
                <Button tittle="Ir a Productos" onPress={() => navigation.navigate('Products')} />
            </View>
        </SafeAreaView>
    );
};



export default Categories