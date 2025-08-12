import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

const links = [
  { title: 'Area Selection', href: '/area-selection' },
  { title: 'Notifications', href: '/notifications' },
  { title: 'VPS Analysis', href: '/analysis' },
  { title: 'Advertisements', href: '/ads' },
  { title: 'Product Launch', href: '/product-launch' },
  { title: 'Vyapar Yog', href: '/vyapar-yog' },
  { title: 'Subscriptions', href: '/subscriptions' },
  { title: 'Search', href: '/search' },
  { title: 'Download & Share', href: '/share' },
  { title: 'Languages', href: '/languages' },
  { title: 'Profile', href: '/profile' },
  { title: 'Admin Panel', href: '/admin' },
  { title: 'Feedback', href: '/feedback' },
];

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      {links.map((l) => (
        <Link key={l.title} href={l.href} asChild>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.link}>{l.title}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  link: { fontSize: 16 },
});