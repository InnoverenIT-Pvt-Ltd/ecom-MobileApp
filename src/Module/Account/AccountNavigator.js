import React from 'react';
import Account from './Account';
import Profile from './Profile/Profile';
import Addresses from './Addresses/Addresses';
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
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Addresses" component={Addresses} />

        </Stack.Navigator>
    );
}