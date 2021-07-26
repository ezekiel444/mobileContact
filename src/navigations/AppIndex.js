import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'



// import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';




function AppIndex() {
    const { Auth: { isLoggedIn } } = useContext(GlobalContext)


    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator></DrawerNavigator> : <AuthNavigator></AuthNavigator>}

        </NavigationContainer>
    )
}


export default AppIndex