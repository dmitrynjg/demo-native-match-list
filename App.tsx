import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider, QueryClient } from 'react-query';

import { MainScreen } from '@/screens/MainScreen';

import './global.css';
import { SafeAreaView } from 'react-native';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={{ backgroundColor: '#06080c', flex: 1 }}>
        <MainScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
