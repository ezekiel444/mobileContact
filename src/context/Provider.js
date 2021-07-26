
import React, { createContext, useReducer } from 'react'
import AuthInitialState from './initalState/AuthInitialState'
import ContactInitialState from './initalState/ContactInitialState'
import AuthReducer from './reducer/AuthReducer'
import ContactsReducer from './reducer/ContactsReducer'

export const GlobalContext = createContext({})

export default GlobalProvider = ({ children }) => {
    const [Auth, AuthDispatch] = useReducer(AuthReducer, AuthInitialState)
    const [ContactState, ContactsDispatch] = useReducer(ContactsReducer, ContactInitialState)

    return <GlobalContext.Provider value={{ Auth, ContactState, AuthDispatch, ContactsDispatch }}>
        {children}
    </GlobalContext.Provider>

}
