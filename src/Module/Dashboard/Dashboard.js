import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainHeader from '../../Navigation/MainHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Product from './Product/Product';

export default function Dashboard() {
    return (
        <>
            <MainHeader />
            <View style={styles.container}>

                {/* <Card >
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card >
                    <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card> */}
                <Product/>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // marginTop: '55%',
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent'
    },
    button: {
        marginRight: 10
    }
})