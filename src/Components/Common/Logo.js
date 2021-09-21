import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../../Assets/Images/new_logo.png')}
          {...this.props}
        />
      </View>
    );
  }
}
