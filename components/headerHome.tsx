import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
export default function HeaderHome() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Pet.</Text>
      </View>
      <View style={styles.headerIcons}>
        <View style={styles.headerIcon} />
        <Ionicons name="mail-outline" size={30} color="#000" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  headerContent: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  headerIcons: {
    position: 'relative',
  },
  headerIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 12,
    width: 12,
    backgroundColor: '#000',
    borderRadius: 10,
}
});
