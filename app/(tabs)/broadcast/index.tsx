import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { NEWS } from '@/constants/mockData';

export default function BroadcastScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>Vyapari Darbar Updates</Text>
      <FlatList
        data={NEWS}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
            <Text style={styles.time}>{item.time} ago</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  section: { fontWeight: '700', fontSize: 16, marginBottom: 12 },
  card: { padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, backgroundColor: 'white' },
  title: { fontWeight: '700' },
  summary: { marginTop: 6 },
  time: { marginTop: 6, fontSize: 12, opacity: 0.6 },
});