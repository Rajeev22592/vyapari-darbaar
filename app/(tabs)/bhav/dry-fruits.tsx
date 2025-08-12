import { View } from '@/components/Themed';
import BhavList from '@/components/BhavList';

export default function DryFruitsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <BhavList segment={'Dry Fruits'} />
    </View>
  );
}