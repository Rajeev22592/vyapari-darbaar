import React from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { NEWS, SAMPLE_RATES } from '@/constants/mockData';
import { useTranslation } from 'react-i18next';

function SegmentIcon({ label, href, emoji, color }: { label: string; href: string; emoji: string; color: string }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity 
        className="w-[30%] items-center rounded-2xl py-6 shadow-lg"
        style={{ backgroundColor: color }}
      >
        <Text className="text-3xl mb-2">{emoji}</Text>
        <Text className="text-sm font-bold text-white">{label}</Text>
      </TouchableOpacity>
    </Link>
  );
}

function PriceCard({ rate }: { rate: any }) {
  const isPositive = rate.change >= 0;
  return (
    <View className="flex-1 rounded-2xl bg-white p-4 shadow-lg border border-gray-100">
      <Text className="text-xs text-gray-600 mb-1">{rate.commodity}</Text>
      <Text className="text-xl font-bold text-gray-800">₹{rate.pricePerQuintal}</Text>
      <View className="flex-row items-center mt-2">
        <View 
          className={`px-2 py-1 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}
        >
          <Text 
            className={`text-xs font-semibold ${isPositive ? 'text-green-700' : 'text-red-700'}`}
          >
            {isPositive ? '+' : ''}{rate.change}
          </Text>
        </View>
        <Text className="text-xs text-gray-500 ml-2">{rate.market}</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const topRates = SAMPLE_RATES.slice(0, 3);
  const topNews = NEWS[0];

  return (
    <ScrollView className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50" contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View className="bg-white px-4 py-6 rounded-b-3xl shadow-lg">
        <Text className="text-2xl font-bold text-gray-800 mb-1">Vyapari Darbaar</Text>
        <Text className="text-gray-600">Your trusted mandi companion</Text>
      </View>

      {/* Daily Bhav Highlights */}
      <View className="px-4 mt-6">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold text-gray-800">📊 Daily Bhav Highlights</Text>
          <Link href="/bhav/grains" asChild>
            <TouchableOpacity>
              <Text className="text-orange-600 font-semibold">View All →</Text>
            </TouchableOpacity>
          </Link>
        </View>
        
        <View className="flex-row gap-3">
          {topRates.map((r) => (
            <PriceCard key={r.id} rate={r} />
          ))}
        </View>
      </View>

      {/* Today's News */}
      <View className="px-4 mt-6">
        <Text className="text-lg font-bold text-gray-800 mb-4">📰 Today's News</Text>
        <Link href="/broadcast" asChild>
          <TouchableOpacity className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-5 shadow-lg">
            <Text className="text-white font-bold text-lg mb-2">{topNews.title}</Text>
            <Text className="text-amber-100 mb-3">{topNews.summary}</Text>
            <View className="flex-row items-center">
              <Text className="text-white font-semibold">Read More</Text>
              <Text className="text-white ml-2">→</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Region Selector */}
      <View className="px-4 mt-6">
        <Text className="text-lg font-bold text-gray-800 mb-4">📍 Select Your Region</Text>
        <Link href="/area-selection" asChild>
          <TouchableOpacity className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold mb-1">Set your trading area</Text>
                <Text className="text-gray-600 text-sm">State • District • Market • Commodity</Text>
              </View>
              <View className="bg-orange-100 p-3 rounded-full">
                <Text className="text-orange-600 text-xl">⚙️</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Explore Segments */}
      <View className="px-4 mt-6">
        <Text className="text-lg font-bold text-gray-800 mb-4">🌾 Explore Segments</Text>
        <View className="flex-row flex-wrap gap-3">
          <SegmentIcon emoji="🌾" label="Grains" href="/(tabs)/bhav/grains" color="#10B981" />
          <SegmentIcon emoji="🌶️" label="Spices" href="/(tabs)/bhav/spices" color="#F59E0B" />
          <SegmentIcon emoji="🛢️" label="Oils" href="/(tabs)/bhav/oils" color="#3B82F6" />
          <SegmentIcon emoji="🧺" label="Dry Fruits" href="/(tabs)/bhav/dry-fruits" color="#8B5CF6" />
          <SegmentIcon emoji="🍚" label="Rice" href="/(tabs)/bhav/rice" color="#EF4444" />
        </View>
      </View>

      {/* Quick Actions */}
      <View className="px-4 mt-6">
        <Text className="text-lg font-bold text-gray-800 mb-4">⚡ Quick Actions</Text>
        <View className="flex-row gap-3">
          <Link href="/directory" asChild>
            <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
              <Text className="text-2xl mb-2">👥</Text>
              <Text className="font-semibold text-gray-800">Trader Directory</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/analysis" asChild>
            <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
              <Text className="text-2xl mb-2">📈</Text>
              <Text className="font-semibold text-gray-800">Market Analysis</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
