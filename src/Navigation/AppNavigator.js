import React from 'react'
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  TouchableRipple,
  Drawer,
} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../Components/UI/Elements/Logo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AdminDashboardScreen from './AdminDashboard';
import ChangePassword from '../Module/Auth/ChangePassword';
import ProfileNavigator from '../Module/Profile/ProfileNavigator';

const Drawers = createDrawerNavigator();

const DrawerContent = props => {

  function handleLogout() {
    // AsyncStorage.removeItem('userDetails');
    props.navigation.navigate('Login');
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <TouchableRipple
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}>
                {/* <Avatar.Image
                    source={{uri: `${base_url}/image/${imageId}`}}
                    size={50}
                  /> */}
                <Logo {...props} />
              </TouchableRipple>
              {/* <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title
                    style={styles.title}
                    onPress={() => {
                      props.navigation.navigate('Profile');
                    }}>
                    {firstName}
                  </Title>
                  <Caption style={styles.caption}>{organizationName}</Caption>
                </View> */}
            </View>
          </View>


          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon={({ color, size }) => (
                // <Icon
                //   name="key"
                //   type="antdesign"
                //   // color={color}
                //   size={size}
                // />
                <Icon
                  name="key"
                  size={size}
                  type="font-awesome"
                />
              )}
              label="Change Password"
              onPress={() => {
                props.navigation.navigate('ChangePassword');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={({ color, size }) => <Icon name="sign-out-alt" size={size} />}
          label="Logout"
          onPress={handleLogout}
        />
      </Drawer.Section>
    </View>
  )
}

function AppNavigator() {
  return (
    <>
      <Drawers.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        >
        <Drawers.Screen name="Home" component={AdminDashboardScreen} />
        <Drawers.Screen name="ChangePassword" component={ChangePassword} />
        <Drawers.Screen name="Profile" component={ProfileNavigator} />
      </Drawers.Navigator>
    </>
  );
}
// const mapStateToProps = ({auth}) => ({
//     // user: auth.userDetails,
//   });

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AppNavigator);
export default AppNavigator;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

