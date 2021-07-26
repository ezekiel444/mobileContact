import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'

import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames'
import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import Create_Contact from '../screens/Create_Contact'
import Settings from '../screens/Settings'







const HomeStack = createStackNavigator()

function HomeNavigator() {
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
            <HomeStack.Screen name={CONTACT_DETAIL} component={Details} />
            <HomeStack.Screen name={CREATE_CONTACT} component={Create_Contact} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />

        </HomeStack.Navigator>
    )
}


export default HomeNavigator