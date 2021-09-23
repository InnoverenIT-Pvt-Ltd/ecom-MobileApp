import React from 'react';
import Wishlist from './Wishlist';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function WishlistNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Wishlist"
        >
            <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
    );
}