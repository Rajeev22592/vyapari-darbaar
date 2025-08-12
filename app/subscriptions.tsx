import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function SubscriptionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Plans</Text>
      <Text>₹199/month</Text>
      <Text>₹499/quarter</Text>
      <Text>₹1500/year</Text>
      <Text style={{ marginTop: 10, opacity: 0.6 }}>UPI Integration (mock) • Access control (mock)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
});