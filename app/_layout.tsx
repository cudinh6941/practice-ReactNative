import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoaded, useFonts } from 'expo-font';
import store, { RootState } from '@/store/store'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider, useSelector } from 'react-redux';
import NotFoundScreen from './+not-found';
import TabLayout from './(tabs)/_layout';
import Login from './login';
import { getIsSigned } from '@/store/authSlice';
import { StatusBar } from 'react-native';
import AuthScreen from './login';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isReady, setIsReady] = useState(false);
  const isSigned = useSelector((state: RootState) => state.auth.isSigned)
  const Stack = createNativeStackNavigator()
  useEffect(() => {
    console.log(isSigned)
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    store.dispatch(getIsSigned());
  })
  useEffect(() => {
    setIsReady(true);
  }, []);
  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'green'
      }
    }}
    >
      {isSigned ? (
        <>
        <Stack.Screen name="tabs" component={TabLayout} options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="login" component={AuthScreen} options={{ headerShown: false }} />
      )}
      <Stack.Screen name="+not-found" component={NotFoundScreen} options={{ headerShown: false }} />
    </Stack.Navigator>  
  );
  
}
const RootLayoutNav = () => {
  return (
    <Provider store={store} >
      <NavigationContainer independent={true}>
          <StatusBar barStyle='light-content' backgroundColor='blue'/>
          <InitialLayout/>
      </NavigationContainer>
   </Provider>
  )
}
export default RootLayoutNav

