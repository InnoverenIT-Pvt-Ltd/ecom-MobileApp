import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';

export default function Dashboard() {
    return (
        <>
            <MainHeader />
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Welcome To Ecom App</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '55%',
    },
})