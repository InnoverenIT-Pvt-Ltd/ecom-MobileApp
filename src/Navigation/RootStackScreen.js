import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Module/Auth/LoginScreen';
import AppNavigator from './AppNavigator';
import SignupScreen from '../Module/Auth/SignupScreen';

const Stack = createStackNavigator();

function RootStackScreen(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="home" component={AppNavigator} />
                <Stack.Screen name="signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;