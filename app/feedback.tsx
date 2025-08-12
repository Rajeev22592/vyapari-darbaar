import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback & Support</Text>
      <Text>Have an issue or suggestion? Email support@vyaparidarbaar.example (mock)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
});