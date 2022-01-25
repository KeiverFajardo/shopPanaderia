import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../screens/categories/index';
import Details from '../screens/details/index';
import Products from '../screens/products/index';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='Categories'
                
            >
                <Stack.Screen 
                    name="Categories" 
                    component={Categories} 
                />

                <Stack.Screen 
                    name="Products"
                    component={Products}
                    
                />
                <Stack.Screen 
                    name="Details"
                    component={Details}
                   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;