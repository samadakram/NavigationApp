import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './DrawerScreens/HomeScreen'
import SettingsScreen from './DrawerScreens/SettingsScreen'
import CustomSidebarMenu from './Components/CustomSidebarMenu'
import NavigationDrawerHeader from './Components/NavigationDrawerHeader'
import { Screen } from 'react-native-screens'
import UploadFileScreen from './StackScreens/UploadFileScreen'
import FileListingScreen from './StackScreens/FileListingScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          )
        }}
      />
      <Stack.Screen
        name='UploadFileScreen'
        component={UploadFileScreen}
        options={{
          title: 'Upload File'
        }}
      />
      <Stack.Screen
        name='FilesListingScreen'
        component={FileListingScreen}
        options={{
          title: 'Uploaded Files'
        }}
      />
    </Stack.Navigator>
  );
}

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigationRoutes = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {
          activeTintColor: '#cee1f2',
          color: '#cee1f2',
          itemStyle: { marginVertical: 5, color: 'white' },
          labelStyle: {
            color: '#d8d8d8',
          },
        },
      }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="HomeScreenStack"
        options={{ drawerLabel: 'Home Screen' }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{ drawerLabel: 'Setting Screen' }}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigationRoutes