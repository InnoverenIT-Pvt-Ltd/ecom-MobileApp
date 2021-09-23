import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';

export default function Order() {
    return (
        <>
            <MainHeader />
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Order Page</Text>
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