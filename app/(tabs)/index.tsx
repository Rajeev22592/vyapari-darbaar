import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { NEWS, SAMPLE_RATES } from '@/constants/mockData';
import { useTranslation } from 'react-i18next';

function SegmentIcon({ label, href, emoji }: { label: string; href: string; emoji: string }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity className="w-[30%] items-center rounded-xl border border-gray-200 bg-white py-4">
        <Text className="text-xl">{emoji}</Text>
        <Text className="mt-1 text-xs font-semibold">{label}</Text>
      </TouchableOpacity>
    </Link>
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const topRates = SAMPLE_RATES.slice(0, 3);
  const topNews = NEWS[0];

  return (
    <ScrollView className="flex-1 px-4" contentContainerStyle={{ paddingBottom: 40 }}>
      <Text className="mt-2 mb-2 text-base font-bold">{t('daily_bhav_highlights')}</Text>
      <View className="flex-row gap-2">
        {topRates.map((r) => (
          <View key={r.id} className="flex-1 rounded-xl border border-gray-200 bg-white p-3">
            <Text className="font-semibold">{r.commodity}</Text>
            <Text className="mt-1 text-lg font-extrabold">₹{r.pricePerQuintal}</Text>
            <Text className="mt-1 text-xs" style={{ color: r.change >= 0 ? '#1E8E3E' : '#D93025' }}>
              {r.change >= 0 ? '+' : ''}{r.change}
            </Text>
          </View>
        ))}
      </View>

      <Text className="mt-3 mb-2 text-base font-bold">{t('todays_news')}</Text>
      <Link href="/broadcast" asChild>
        <TouchableOpacity className="rounded-xl border border-amber-300 bg-amber-50 p-4">
          <Text className="font-bold">{topNews.title}</Text>
          <Text className="mt-1">{topNews.summary}</Text>
          <Text className="mt-2 font-semibold">Tap to read more →</Text>
        </TouchableOpacity>
      </Link>

      <Text className="mt-4 mb-2 text-base font-bold">{t('select_region')}</Text>
      <Link href="/area-selection" asChild>
        <TouchableOpacity className="rounded-xl border border-gray-200 bg-white p-4">
          <Text>Set your State · District · Market · Commodity</Text>
          <Text className="mt-1 font-semibold">{t('open_selector')}</Text>
        </TouchableOpacity>
      </Link>

      <Text className="mt-4 mb-2 text-base font-bold">{t('explore_segments')}</Text>
      <View className="mt-1 flex-row flex-wrap gap-3">
        <SegmentIcon emoji="🌾" label="Grains" href="/(tabs)/bhav/grains" />
        <SegmentIcon emoji="🌶️" label="Spices" href="/(tabs)/bhav/spices" />
        <SegmentIcon emoji="🛢️" label="Oils" href="/(tabs)/bhav/oils" />
        <SegmentIcon emoji="🧺" label="Dry Fruits" href="/(tabs)/bhav/dry-fruits" />
        <SegmentIcon emoji="🍚" label="Rice" href="/(tabs)/bhav/rice" />
      </View>
    </ScrollView>
  );
}
