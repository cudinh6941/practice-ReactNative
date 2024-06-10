import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoaded, useFonts } from 'expo-font';
import store, { RootState } from '@/store/store'
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Login from '.';
import NotFoundScreen from './+not-found';
import TabLayout from './(tabs)/_layout';
import HomeScreen from './(tabs)';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isReady, setIsReady] = useState(false);
  const isSigned = useSelector((state: RootState) => state.auth.isSigned)
  const router = useRouter()
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    setIsReady(true);
  }, []);

  // useEffect(() => {
  //   console.log('IsSigned', isSigned)
  //   if (isReady && isSigned) {
  //     router.replace('/(tabs)');
  //   } else if (isReady && !isSigned) {
  //     router.replace('/');
  //   }
  // }, [isSigned]);

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='(tabs)'>
          <Stack.Screen name="index" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" component={TabLayout} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}

          {/* <Stack.Screen name="screens" options={{headerShown: false}} /> */}
          {/* <Stack.Screen name="+not-found" component={NotFoundScreen} /> */}
     </Stack.Navigator>  
   
  );
}
const RootLayoutNav = () => {
  return (
    <Provider store={store} >
      <NavigationContainer independent={true}>
          <StatusBar/>
          <InitialLayout/>
      </NavigationContainer>
   </Provider>
  )
}
export default RootLayoutNav

