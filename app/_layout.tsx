import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoaded, useFonts } from 'expo-font';
import store, { RootState } from '@/store/store'
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

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

  useEffect(() => {
    console.log('IsSigned', isSigned)
    if (isReady && isSigned) {
      router.replace('/(tabs)');
    } else if (isReady && !isSigned) {
      router.replace('/');
    }
  }, [isSigned]);

  if (!loaded) {
    return null;
  }

  return (
   
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="screens" options={{headerShown: false}} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
   
  );
}
const RootLayoutNav = () => {
  return (
    <Provider store={store} >
      <StatusBar/>
      <InitialLayout/>
    </Provider>
  )
}
export default RootLayoutNav

