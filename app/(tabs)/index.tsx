import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import useMainStore from '@/stores/main.store';

export default function TabOneScreen() {
  const { storeName, storeVersion } = useMainStore();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StoreName: {storeName}</Text>
      <Text style={styles.title}>StoreVersion: {storeVersion}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
