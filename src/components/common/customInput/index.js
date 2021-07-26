import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import colors from '../../../asserts/theme/colors'
import styleInput from './styleInput'


const CustomInput = ({ value,
    onChangeText,
    style,
    label,
    icon,
    iconPosition,
    error,
    ...props
}) => {

    const [onFocus, setFocus] = useState(false)

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return "row"
            } else {

                if (iconPosition === 'right') return "row-reverse"
            }

        }
    }

    const getBorderColor = () => {
        if (error) {
            return colors.danger
        } if (onFocus) {
            return colors.primary
        } else {
            return colors.grey
        }
    }


    return (
        <View style={styleInput.inputContainer}>

            {label && <Text>{label}</Text>}

            <View style={[styleInput.inputWrapper, { borderColor: getBorderColor(), alignItems: icon ? 'center' : 'baseline' }, { flexDirection: getFlexDirection() }]}>

                {icon && <View>{icon}</View>}

                <TextInput
                    style={[styleInput.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder='E.g Abc..'
                    icon={icon}
                    iconPosition='right'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styleInput.error}>{error}</Text>}
        </View>
    )
}

export default CustomInput
