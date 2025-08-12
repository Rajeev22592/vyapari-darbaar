import React from 'react';
import { Text, View } from '@/components/Themed';

export default function HeaderLogo() {
  return (
    <View className="flex-row items-center ml-4">
      <View className="bg-gradient-to-r from-orange-500 to-amber-600 w-8 h-8 rounded-lg items-center justify-center mr-3">
        <Text className="text-white font-bold text-lg">VD</Text>
      </View>
      <View>
        <Text className="text-lg font-bold text-gray-800">Vyapari Darbaar</Text>
        <Text className="text-xs text-gray-500">Mandi Bhav & Network</Text>
      </View>
    </View>
  );
}