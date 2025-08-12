import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ProductLaunchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Launch</Text>
      <Text>Banner • Description • Order Now / Sample Request • Contact info</Text>
      <Text style={styles.cta}>Sample Mangaye →</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  cta: { marginTop: 12, fontWeight: '700' },
});