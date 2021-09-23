import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';

export default function Profile() {
    return (
        <>
            <MainHeader />
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Profile Page</Text>
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