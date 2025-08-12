import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { DIRECTORY } from '@/constants/mockData';

export default function DirectoryScreen() {
  const [q, setQ] = useState('');
  const data = useMemo(() => DIRECTORY.filter((d) => (
    [d.name, d.category, d.state, d.phone].some((v) => v.toLowerCase().includes(q.toLowerCase()))
  )), [q]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search traders / category / state" value={q} onChangeText={setQ} style={styles.search} />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.category} · {item.state}</Text>
            </View>
            <Text style={styles.phone}>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  search: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginBottom: 12 },
  card: { padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, backgroundColor: 'white', flexDirection: 'row' },
  name: { fontWeight: '700', fontSize: 16 },
  meta: { fontSize: 12, opacity: 0.7, marginTop: 4 },
  phone: { fontSize: 12, fontWeight: '600' },
});