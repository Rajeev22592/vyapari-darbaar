import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useApp } from '@/context/AppContext';

export default function NotificationsScreen() {
  const { preferences, toggleNotifications } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push Notifications</Text>
      <View style={styles.row}>
        <Text>Daily auto-push (6–8am)</Text>
        <Switch value={preferences.notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});