import React, { useMemo, useState } from 'react';
import { Text } from '@/components/Themed';
import { View, TouchableOpacity } from 'react-native';
import { STATES, DISTRICTS, MARKETS, COMMODITIES, COMMODITY_SEGMENTS } from '@/constants/mockData';
import { useApp } from '@/context/AppContext';
import { Picker } from '@react-native-picker/picker';

export default function AreaSelectionScreen() {
  const { preferences, updateRegion } = useApp();
  const [state, setState] = useState(preferences.region.state ?? STATES[0]);
  const [district, setDistrict] = useState(preferences.region.district ?? DISTRICTS[state][0]);
  const [market, setMarket] = useState(preferences.region.market ?? MARKETS[district][0]);
  const [segment, setSegment] = useState<typeof COMMODITY_SEGMENTS[number]>('Grains');
  const [commodity, setCommodity] = useState(preferences.region.commodity ?? COMMODITIES[segment][0]);

  const districts = useMemo(() => DISTRICTS[state] ?? [], [state]);
  const markets = useMemo(() => MARKETS[district] ?? [], [district]);
  const commodities = useMemo(() => COMMODITIES[segment] ?? [], [segment]);

  return (
    <View className="flex-1 px-4">
      <Text className="mb-3 text-lg font-bold">Select your area and commodity</Text>

      <Text className="mb-1 font-semibold">State</Text>
      <View className="rounded-xl border border-gray-200 bg-white">
        <Picker selectedValue={state} onValueChange={(v) => { setState(v); setDistrict(DISTRICTS[v][0]); setMarket(MARKETS[DISTRICTS[v][0]][0]); }}>
          {STATES.map((s) => <Picker.Item key={s} label={s} value={s} />)}
        </Picker>
      </View>

      <Text className="mt-3 mb-1 font-semibold">District</Text>
      <View className="rounded-xl border border-gray-200 bg-white">
        <Picker selectedValue={district} onValueChange={(v) => { setDistrict(v); setMarket(MARKETS[v][0]); }}>
          {districts.map((d) => <Picker.Item key={d} label={d} value={d} />)}
        </Picker>
      </View>

      <Text className="mt-3 mb-1 font-semibold">Market</Text>
      <View className="rounded-xl border border-gray-200 bg-white">
        <Picker selectedValue={market} onValueChange={(v) => setMarket(v)}>
          {markets.map((m) => <Picker.Item key={m} label={m} value={m} />)}
        </Picker>
      </View>

      <Text className="mt-3 mb-1 font-semibold">Segment</Text>
      <View className="rounded-xl border border-gray-200 bg-white">
        <Picker selectedValue={segment} onValueChange={(v) => { setSegment(v); setCommodity(COMMODITIES[v][0]); }}>
          {COMMODITY_SEGMENTS.map((seg) => <Picker.Item key={seg} label={seg} value={seg} />)}
        </Picker>
      </View>

      <Text className="mt-3 mb-1 font-semibold">Commodity</Text>
      <View className="rounded-xl border border-gray-200 bg-white">
        <Picker selectedValue={commodity} onValueChange={(v) => setCommodity(v)}>
          {commodities.map((c) => <Picker.Item key={c} label={c} value={c} />)}
        </Picker>
      </View>

      <TouchableOpacity 
        className="mt-4 rounded-lg border border-gray-200 bg-white p-3" 
        onPress={() => updateRegion({ state, district, market, commodity })}
      >
        <Text className="text-center font-bold">Save Selection</Text>
      </TouchableOpacity>
    </View>
  );
}