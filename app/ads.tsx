import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function AdsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advertisement Panel</Text>
      <Text>Product Banners (Image/Video)</Text>
      <Text>Listing Promotions</Text>
      <Text>Launch Alerts</Text>
      <Text style={{ marginTop: 12, opacity: 0.6 }}>Location-based ads targeting (mock)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
});