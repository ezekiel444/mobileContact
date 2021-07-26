import { StyleSheet } from "react-native"
import colors from "../../../asserts/theme/colors"

export default StyleSheet.create({
    inputContainer: {
        paddingVertical: 12,
    },
    inputWrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 5,
    },
    textInput: {
        flex: 1,
        width: '100%',
    },

    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 15,
    },

})

