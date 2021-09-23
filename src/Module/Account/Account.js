import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';

export default function Account() {
    return (
        <>
            <MainHeader />
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Account page</Text>
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