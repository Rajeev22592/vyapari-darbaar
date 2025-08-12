import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

const links = [
  { title: 'Area Selection', href: '/area-selection', icon: '📍', color: '#10B981' },
  { title: 'Notifications', href: '/notifications', icon: '🔔', color: '#F59E0B' },
  { title: 'VPS Analysis', href: '/analysis', icon: '📈', color: '#3B82F6' },
  { title: 'Advertisements', href: '/ads', icon: '📢', color: '#8B5CF6' },
  { title: 'Product Launch', href: '/product-launch', icon: '🚀', color: '#EF4444' },
  { title: 'Vyapar Yog', href: '/vyapar-yog', icon: '🤝', color: '#06B6D4' },
  { title: 'Subscriptions', href: '/subscriptions', icon: '💎', color: '#F97316' },
  { title: 'Search', href: '/search', icon: '🔍', color: '#84CC16' },
  { title: 'Download & Share', href: '/share', icon: '📥', color: '#A855F7' },
  { title: 'Languages', href: '/languages', icon: '🌐', color: '#EC4899' },
  { title: 'Profile', href: '/profile', icon: '👤', color: '#6366F1' },
  { title: 'Admin Panel', href: '/admin', icon: '⚙️', color: '#64748B' },
  { title: 'Feedback', href: '/feedback', icon: '💬', color: '#059669' },
];

export default function MoreScreen() {
  return (
    <View className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <View className="bg-white px-4 py-6 rounded-b-3xl shadow-lg mx-4 mt-4">
        <Text className="text-2xl font-bold text-gray-800 mb-1">More Options</Text>
        <Text className="text-gray-600">Access all app features and settings</Text>
      </View>

      {/* Menu Items */}
      <View className="px-4 mt-6">
        <View className="flex-row flex-wrap gap-3">
          {links.map((l) => (
            <Link key={l.title} href={l.href} asChild>
              <TouchableOpacity 
                className="w-[47%] bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                style={{ borderLeftWidth: 4, borderLeftColor: l.color }}
              >
                <View className="items-center">
                  <Text className="text-3xl mb-3">{l.icon}</Text>
                  <Text className="font-semibold text-gray-800 text-center text-sm">{l.title}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>

      {/* Footer Info */}
      <View className="px-4 mt-8 mb-6">
        <View className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
          <Text className="text-center text-gray-600 text-sm">
            Vyapari Darbaar v1.0.0
          </Text>
          <Text className="text-center text-gray-500 text-xs mt-1">
            Your trusted mandi companion
          </Text>
        </View>
      </View>
    </View>
  );
}