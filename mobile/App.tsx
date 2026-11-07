import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { RiskSelectionProvider } from './src/context/RiskSelectionContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <RiskSelectionProvider>
        <AppNavigator />
      </RiskSelectionProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
