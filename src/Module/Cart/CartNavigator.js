import React from 'react';
import Cart from './Cart';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CartNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Cart"
        >
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}