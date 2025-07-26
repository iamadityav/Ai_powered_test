// src/navigation/AppNavigator.tsx

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { enableScreens } from 'react-native-screens';
enableScreens();

import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen'; // to be created
import { Text, View } from 'react-native';
import CreatePostScreen from '../screens/CreatePostScreen';

export type RootStackParamList = {
  Login: undefined;
  Feed: undefined;
  CreatePost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      setIsAuthenticated(loggedIn === 'true');
    };
    checkLoginStatus();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading App...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Feed' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// const AppNavigator = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const loggedIn = await AsyncStorage.getItem('loggedIn');
//       setIsAuthenticated(loggedIn === 'true');
//     };
//     checkLoginStatus();
//   }, []);

// //   if (isAuthenticated === null) return null; // Loading state
  
  
//   if (isAuthenticated === null) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Loading App...</Text>
//     </View>
//   );
// }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isAuthenticated ? (
//           <Stack.Screen name="Feed" component={FeedScreen} />
//         ) : (
//           <Stack.Screen name="Login" component={LoginScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default AppNavigator;
