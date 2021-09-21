import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function RightHeader(props) {

    const navigation = useNavigation();
    console.log("inside right header",props.user);
  
    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        
        <View style={styles.Department}>
          <Text 
            style={{
              color: 'tomato',
              paddingTop: 4,
              paddingLeft: 4,
              paddingRight: 4
            }}>
            {props.department}
          </Text>
        </View>

        <View style={styles.Designation}>
            <Text 
              style={{
                color: 'tomato',
                paddingTop: 4,
                paddingLeft: 4,
                paddingRight: 4
              }}>
                {props.user.designation}
            </Text>
        </View>

        <View style = {{marginRight : '-1%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard')}
              // onPress={() => alert('working')}
            >
            <Image
                style={{ width: 43, height: 43 }}
                source={require('../../../Assets/Images/right_header.png')}
            />
            </TouchableOpacity>
        </View>
      </View>
    );
}

const mapStateToProps = ({ auth }) => ({
    user: auth.userDetails,
    department: auth.userDetails && auth.userDetails.functionName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RightHeader);

const styles = StyleSheet.create({
  Department: {
    marginTop : '4%',
    marginBottom : '3%',
    marginRight : '3%',
    // borderColor: '#fb8449',
    borderRadius: 4,
    backgroundColor: '#fff1e3',
  },
  Designation: {
    marginTop : '4%',
    marginBottom : '3%',
    marginRight : '2%',
    borderRadius: 4,
    backgroundColor: '#fff1e3',
  }
})
