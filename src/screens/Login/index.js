import React from 'react'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Container from '../../components/common/Container'
import CustomButtom from '../../components/common/customButtom'
import CustomInput from '../../components/common/customInput'


export default Login = () => {
    const [userInputValue, setUserInputValue] = useState('')

    return (

        <Container>
            <View>
                <CustomInput
                    label='Username'
                    onChangeText={text => setUserInputValue(text)}
                    value={userInputValue}
                    placeholder='E.g name'
                    icon={<Text>Hide</Text>}
                    iconPosition='right'
                // error="is required"
                />
            </View>
            <CustomButtom
                title='button'
                // primary
                // secondary
                danger
            // loading
            // disable
            // onpress

            />
        </Container>
    )
}