import React from 'react';
import Dashboard from './Dashboard';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function DashboardNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Dashboard"
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}