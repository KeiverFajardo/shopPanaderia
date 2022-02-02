import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../screens/categories/index';
import ProductDetail from '../../screens/product-detail/index';
import Products from '../../screens/products/index';
import { Platform } from 'react-native';



const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? "green" : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : "green",
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen 
                name="Products"
                component={Products}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />
            <Stack.Screen 
                name="ProductDetail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigation;