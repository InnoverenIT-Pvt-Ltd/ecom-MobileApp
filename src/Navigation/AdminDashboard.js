import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DashboardNavigator from '../Module/Dashboard/DashboardNavigator';
import OrderNavigator from '../Module/Order/OrderNavigator';
import WishlistNavigator from '../Module/Wishlist/WishlistNavigator';
import CartNavigator from '../Module/Cart/CartNavigator';
import AccountNavigator from '../Module/Account/AccountNavigator';

const Tab = createBottomTabNavigator();
export default function AdminDashboardScreen(props) {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        }
                        else if (route.name === 'My Account') {
                            // debugger;
                            iconName = 'user-alt';
                        } else if (route.name === 'My Order') {
                            // debugger;
                            iconName = 'shopping-bag';
                        } else if (route.name === 'My Wishlist') {
                            // debugger;
                            iconName = 'th-list';
                        }
                        else if (route.name === 'My Cart') {
                            // debugger;
                            iconName = 'shopping-cart';
                        }

                        return <Icon name={iconName} size={20} color={color} />;
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#009387',
                    inactiveTintColor: 'black',

                    style: {
                        backgroundColor: '#ffffff', // TabBar background
                        height: 43,
                        padding: 8,
                    },
                }}>
                <Tab.Screen name="Home" component={DashboardNavigator} />
                <Tab.Screen name="My Account" component={AccountNavigator} />
                <Tab.Screen name="My Order" component={OrderNavigator} />
                <Tab.Screen name="My Wishlist" component={WishlistNavigator} />
                <Tab.Screen name="My Cart" component={CartNavigator} />
            </Tab.Navigator>
        </>
    );
}