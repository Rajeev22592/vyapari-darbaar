import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Icon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={20} {...props} />;
}

export default function BhavLayout() {
  return (
    <Tabs screenOptions={{ tabBarScrollEnabled: true }}>
      <Tabs.Screen
        name="grains"
        options={{ title: 'Grains', tabBarIcon: ({ color }) => <Icon name="leaf" color={color} /> }}
      />
      <Tabs.Screen
        name="spices"
        options={{ title: 'Spices', tabBarIcon: ({ color }) => <Icon name="fire" color={color} /> }}
      />
      <Tabs.Screen
        name="oils"
        options={{ title: 'Oils', tabBarIcon: ({ color }) => <Icon name="tint" color={color} /> }}
      />
      <Tabs.Screen
        name="dry-fruits"
        options={{ title: 'Dry Fruits', tabBarIcon: ({ color }) => <Icon name="shopping-basket" color={color} /> }}
      />
      <Tabs.Screen
        name="rice"
        options={{ title: 'Rice', tabBarIcon: ({ color }) => <Icon name="pie-chart" color={color} /> }}
      />
    </Tabs>
  );
}