import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <Text>Daily bhav upload (CSV/manual)</Text>
      <Text>Send push notifications</Text>
      <Text>Add/remove ads</Text>
      <Text>Add new mandi or category</Text>
      <Text>Moderate listings</Text>
      <Text>Analytics Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
});