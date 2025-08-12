import { Image } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function HeaderLogo() {
  return (
    <View className="flex-row items-center gap-2 px-4 py-2">
      <Image source={require('@/assets/images/icon.png')} className="w-6 h-6" />
      <Text className="font-bold text-lg text-brand">Vyapari Darbaar</Text>
    </View>
  );
}