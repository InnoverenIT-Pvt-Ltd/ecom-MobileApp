import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from "react-native-elements";

export default class TouchableText extends Component {
    render() {
        const fontSize = this.props.fontSize || 16;
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={this.props.handleTouchablePress || null}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
               {!! this.props.iconName && <Icon
                    name={this.props.iconName}
                    color='#2e8dd1'
                    size={fontSize}/>}
                    <Text style={{ fontSize: fontSize, color: '#2e8dd1'}}>
                        {this.props.text || ''}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        marginTop: -70,
        marginLeft:0,
        marginBottom:30,
    },
    touchableText: {
        fontSize: 16,
        color: '#2e8dd1',
        // marginTop:'-30%'
    }
})
