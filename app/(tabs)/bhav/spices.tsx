import { View } from '@/components/Themed';
import BhavList from '@/components/BhavList';

export default function SpicesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <BhavList segment={'Spices'} />
    </View>
  );
}