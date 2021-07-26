import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../asserts/theme/colors'
import styleButton from './styleButton'


const CustomButtom = ({
    title,
    style,
    primary,
    secondary,
    danger,
    loading,
    disable,
    onpress

}) => {


    const getBgColor = () => {
        if (disable) {
            return colors.grey
        }
        if (primary) {
            return colors.primary
        } else if (secondary) {
            return colors.secondary
        } else if (danger) {
            return colors.danger
        }
    }




    return (
        <TouchableOpacity
            onpress={onpress}
            disabled={disable}
            style={[styleButton.buttomWrapper, { backgroundColor: getBgColor() }, style]}>

            <View style={styleButton.loaderSection}>
                {loading && (<ActivityIndicator
                    color={primary ? colors.secondary : colors.primary} />)}


                {title && <Text
                    style={{
                        color: disable ? 'black' : colors.white,
                        paddingLeft: loading ? 5 : 0
                    }}

                >{loading ? "Please wait..." : title}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default CustomButtom
