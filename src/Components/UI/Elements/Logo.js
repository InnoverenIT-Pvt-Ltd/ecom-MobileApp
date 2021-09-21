import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Icon, Avatar, Image} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {base_url} from '../../../Config/Auth';
import {useNavigation} from '@react-navigation/native';

function Logo(props) {

    console.log("inside logo",props.user);
    const imageId = props.user && props.user.imageId;
    const firstName = props.user && props.user.firstName;

    const navigation = useNavigation();
    
    return (
      <View style={{display: 'flex', flexDirection: 'row'}}>
        {imageId && (
          <Avatar
            rounded
            onPress={() => navigation.openDrawer()}
            source={{
              uri: `${base_url}/image/${imageId}`,
            }}
          />
        )}
        {!imageId && (
          <Avatar
            rounded
            placeholderStyle={{backgroundColor: '#1890FF'}}
            onPress={() => navigation.openDrawer()}
            source={{
              uri: `${base_url}/image/${imageId}`,
            }}
            title={firstName && firstName.split('')[0].toUpperCase()}
          />
        )}
      </View>
    );
}
const mapStateToProps = ({auth}) => ({
  user:auth.userDetails
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logo);
