import React, { useMemo, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { COMMODITIES, SAMPLE_RATES, STATES, DISTRICTS } from '@/constants/mockData';
import { useApp } from '@/context/AppContext';

export default function BhavList({ segment }: { segment: keyof typeof COMMODITIES }) {
  const { preferences } = useApp();
  const [query, setQuery] = useState('');

  const commodities = COMMODITIES[segment];

  const filtered = useMemo(() => {
    const base = SAMPLE_RATES.filter((r) => commodities.includes(r.commodity));
    return base.filter((r) =>
      [r.commodity, r.market, r.district, r.state].some((v) => v.toLowerCase().includes(query.toLowerCase()))
    );
  }, [commodities, query]);

  const currentState = preferences.region.state ?? STATES[0];
  const districts = DISTRICTS[currentState] ?? [];

  return (
    <View className="flex-1 px-4 py-4">
      <View className="mb-2 flex-row flex-wrap gap-2">
        <Text className="text-xs opacity-70">State: {currentState}</Text>
        <Text className="text-xs opacity-70">District: {preferences.region.district ?? districts[0] ?? '-'}</Text>
        <Text className="text-xs opacity-70">Commodity: {preferences.region.commodity ?? commodities[0]}</Text>
      </View>
      <TextInput
        placeholder="Search commodity / market / district"
        value={query}
        onChangeText={setQuery}
        className="mb-3 rounded-lg border border-gray-200 bg-white p-3"
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={({ item }) => (
          <View className="flex-row rounded-xl border border-gray-200 bg-white p-3">
            <View className="flex-1">
              <Text className="font-semibold">{item.commodity}</Text>
              <Text className="mt-1 text-xs opacity-70">{item.market} · {item.district}, {item.state}</Text>
            </View>
            <View className="items-end">
              <Text className="text-lg font-extrabold">₹{item.pricePerQuintal}</Text>
              <Text className="mt-1 text-xs" style={{ color: item.change >= 0 ? '#1E8E3E' : '#D93025' }}>
                {item.change >= 0 ? '+' : ''}{item.change}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}