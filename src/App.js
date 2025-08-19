import AppNavigation from './navigation/AppNavigation';
import { TamaguiProvider, View } from '@tamagui/core'
import config from '../tamagui.config.js';
export default function App() {
  return (
      <TamaguiProvider config={config}>
        <AppNavigation />
      </TamaguiProvider>
  );
}