import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import containerStyles from './containerStyles'

const Container = ({ children, style }) => {
    return (
        <ScrollView>
            <View style={[containerStyles.wrapper, style]}>
                {children}
            </View>
        </ScrollView>
    )
}

export default Container
