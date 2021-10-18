import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Account(props) {
    const navigate = props.navigation.navigate;
    return (
        <>
            <MainHeader />
            <Card style={styles.card}
                onPress={() => props.navigation.navigate('Profile')}
            >
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Content>
                    <Title>User Profile</Title>
                    <Paragraph>Edit name, mobile</Paragraph>
                </Card.Content>
            </Card>

            <Card style={styles.card}
             onPress={() => props.navigation.navigate('Addresses')}>
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Content>
                    <Title>Addresses</Title>
                    <Paragraph>Edit Address For Order</Paragraph>
                </Card.Content>
            </Card>
        </>
    )
};

const styles = StyleSheet.create({
    card: {
        marginTop: '20%',
    },
})