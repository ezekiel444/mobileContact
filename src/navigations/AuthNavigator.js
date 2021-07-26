import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { LOGIN, REGISTER } from '../constants/routeNames'
import Login from '../screens/Login'
import Register from '../screens/Register'


const AuthStack = createStackNavigator()

export default function AuthNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={LOGIN} component={Login} />
            <AuthStack.Screen name={REGISTER} component={Register} />

        </AuthStack.Navigator>
    )
}
