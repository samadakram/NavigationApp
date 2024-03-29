import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../Context/AppContext';

const CustomSidebarMenu = (props) => {

  const { loggedUserName } = useContext(AppContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user_name')
      .then((loggedUser) => {
        setUserName(loggedUser);
        console.log("User==>", loggedUser)
      })
      .catch(error => {
        console.log('Error retrieving user name:', error);
      });
  }, []);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: '#307ecc' }}>
            {userName.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {userName}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) =>
            <Text style={{ color: '#d8d8d8' }}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});