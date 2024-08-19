import {useLayoutEffect, useMemo, useRef} from 'react';

import {SplashScreen, useRootNavigationState, useRouter, useSegments,} from 'expo-router';
import {useFonts} from "expo-font";

const useProtectedRoute = () => {
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();
  const router = useRouter();
  const currentRouteRef = useRef<'auth' | 'tabs' | null>(null);
  const navigationKey = useMemo(() => {
    return rootNavigationState?.key;
  }, [rootNavigationState]);

  let isAuthentificated = false;

  const [loaded, error] = useFonts({
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useLayoutEffect(() => {
    if (!navigationKey) {
      return;
    }

    if (loaded || error) {
      SplashScreen.hideAsync();
      // setTimeout(SplashScreen.hideAsync, 5000);
    }

    if (
      !isAuthentificated &&
      currentRouteRef.current !== 'auth'
    ) {
      router.replace('/sign-up');
      currentRouteRef.current = 'auth';
    } else if (isAuthentificated && currentRouteRef.current !== 'tabs') {
      router.replace('/(tabs)');
      currentRouteRef.current = 'tabs';
    }
  }, [isAuthentificated, segments, navigationKey, loaded, error]);
};

export default useProtectedRoute;