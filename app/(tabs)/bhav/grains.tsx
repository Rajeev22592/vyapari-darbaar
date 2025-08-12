import { View } from '@/components/Themed';
import BhavList from '@/components/BhavList';

export default function GrainsScreen() {
  return (
    <View className="flex-1">
      <BhavList segment={'Grains'} />
    </View>
  );
}