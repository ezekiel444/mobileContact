/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React from 'react';
import GlobalProvider from './src/context/Provider';
import AppIndex from './src/navigations/AppIndex';




export default function App() {
  return (
    <GlobalProvider>

      <AppIndex />

    </GlobalProvider>
  );
}
