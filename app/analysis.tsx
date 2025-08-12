import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function AnalysisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VPS Analysis (Vyapari Point of View)</Text>
      <Text style={styles.p}>Aaj ka saral vishleshan: Demand halki tezi mein, supply sthan-par. Festive impact se dry fruits segment mein demand badh rahi hai. Government policies stable.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  p: { fontSize: 14, lineHeight: 20 },
});