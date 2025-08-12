import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { COMMODITIES, DIRECTORY, MARKETS } from '@/constants/mockData';

export default function SearchScreen() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const commodityList = Object.values(COMMODITIES).flat().map((c) => ({ type: 'Commodity', value: c }));
    const marketList = Object.values(MARKETS).flat().map((m) => ({ type: 'Market', value: m }));
    const traderList = DIRECTORY.map((d) => ({ type: 'Trader', value: d.name }));
    return [...commodityList, ...marketList, ...traderList].filter((i) => i.value.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search commodity / mandi / trader" value={q} onChangeText={setQ} style={styles.search} />
      <FlatList
        data={results}
        keyExtractor={(i, idx) => `${i.type}-${i.value}-${idx}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.type}>{item.type}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  search: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginBottom: 12 },
  row: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  type: { fontSize: 12, opacity: 0.6 },
});