// App.tsx
import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    // <SafeAreaProvider>
    //   {/* <Text>
    //     Hii
    //   </Text> */}
    //   <AppNavigator />
    // </SafeAreaProvider>
        <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
