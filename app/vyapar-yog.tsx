import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { TRADERS } from '@/constants/mockData';

export default function VyaparYogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vyapar Yog (Verified Traders)</Text>
      <FlatList
        data={TRADERS}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name} {item.verified ? '✅' : ''}</Text>
            <Text style={styles.meta}>{item.segment}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  card: { padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, backgroundColor: 'white' },
  name: { fontWeight: '700' },
  meta: { marginTop: 6 },
  phone: { marginTop: 6, fontWeight: '600' },
});