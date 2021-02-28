/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navigator from './Navigator';
import {ThemeContextProvider} from './src/theme'
const App=() => {
  return (
    <ThemeContextProvider name='default'>
      <Navigator/>
    </ThemeContextProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
