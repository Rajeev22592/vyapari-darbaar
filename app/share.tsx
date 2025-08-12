import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ShareScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download / Share</Text>
      <Text>Save bhav reports as image (mock)</Text>
      <Text>Share to WhatsApp / Telegram (mock)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
});