import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useApp } from '@/context/AppContext';
import { useTranslation } from 'react-i18next';

export default function LanguagesScreen() {
  const { preferences, setLanguage } = useApp();
  const { t } = useTranslation();
  return (
    <View className="flex-1 px-4">
      <Text className="mb-3 text-lg font-bold">Languages</Text>
      <TouchableOpacity className="border-b border-gray-200 py-3" onPress={() => setLanguage('hi')}>
        <Text>Hindi {preferences.language === 'hi' ? '✓' : ''}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border-b border-gray-200 py-3" onPress={() => setLanguage('en')}>
        <Text>English {preferences.language === 'en' ? '✓' : ''}</Text>
      </TouchableOpacity>
    </View>
  );
}