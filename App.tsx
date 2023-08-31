import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Route from './src/navigation/index'

export default function App() {
  
  return (
    <Route/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
