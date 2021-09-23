import React from 'react';
import Account from './Account';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AccountNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Account"
        >
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    );
}