import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigation } from '@components/BottomNavigation/BottomNavigation';
import { AuthNavigation } from '@components/AuthNavigation/AuthNavigation';
import { useAuth } from '@hooks/useAuth';

export default function App() {
  const { isLoggedIn } = useAuth();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <BottomNavigation />
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
