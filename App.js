import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { name as appName } from './app.json';

export default function App() {
  const ctx = require.context("./app/tabs")
  return (
    <ExpoRoot context={ctx} />
  );
}

AppRegistry.registerComponent(appName, () => App);