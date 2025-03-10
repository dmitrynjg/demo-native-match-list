import { SafeAreaView } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';

import { MainScreen } from '@/screens/MainScreen';

import './global.css';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={{ backgroundColor: '#06080c', flex: 1 }}>
        <MainScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
