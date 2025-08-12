import { View } from '@/components/Themed';
import BhavList from '@/components/BhavList';

export default function OilsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <BhavList segment={'Oils'} />
    </View>
  );
}