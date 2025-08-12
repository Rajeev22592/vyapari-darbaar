import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { AppProvider, useApp } from '@/context/AppContext';
import '@/i18n';
import i18n from '@/i18n';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <LanguageSync>
        <RootLayoutNav />
      </LanguageSync>
    </AppProvider>
  );
}

function LanguageSync({ children }: { children: React.ReactNode }) {
  const { preferences } = useApp();
  useEffect(() => {
    i18n.changeLanguage(preferences.language);
  }, [preferences.language]);
  return <>{children}</>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="area-selection" options={{ title: 'Select Area' }} />
        <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
        <Stack.Screen name="analysis" options={{ title: 'VPS Analysis' }} />
        <Stack.Screen name="ads" options={{ title: 'Advertisements' }} />
        <Stack.Screen name="product-launch" options={{ title: 'Product Launch' }} />
        <Stack.Screen name="vyapar-yog" options={{ title: 'Vyapar Yog' }} />
        <Stack.Screen name="subscriptions" options={{ title: 'Subscriptions' }} />
        <Stack.Screen name="search" options={{ title: 'Search' }} />
        <Stack.Screen name="share" options={{ title: 'Download & Share' }} />
        <Stack.Screen name="languages" options={{ title: 'Languages' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        <Stack.Screen name="admin" options={{ title: 'Admin Panel' }} />
        <Stack.Screen name="feedback" options={{ title: 'Feedback' }} />
        <Stack.Screen name="bhav/[segment]" options={{ title: 'Mandi Bhav' }} />
      </Stack>
    </ThemeProvider>
  );
}
