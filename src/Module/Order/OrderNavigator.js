import React from 'react';
import Order from './Order';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function OrderNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Order"
        >
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    );
}