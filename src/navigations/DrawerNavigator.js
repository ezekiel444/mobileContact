import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native'
import { useState } from 'react'

import HomeNavigator from './HomeNavigator'
import { HOMENAVIGATOR } from '../constants/routeNames'




const DrawerStack = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <DrawerStack.Navigator>

            <DrawerStack.Screen name={HOMENAVIGATOR} component={HomeNavigator} />
            {/* <DrawerStack.Screen name='Registration Page' component={Signup} />
            <DrawerStack.Screen name='Contacts' component={Contacts} /> */}
        </DrawerStack.Navigator>
    )
}
