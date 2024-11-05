import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { randomColor } from '@/utils/randomColor'
import { ImageSourcePropType } from 'react-native'
import { StatusItem } from './statusComponent'


const StatusComItem = ({item}: {item: StatusItem}) => {
  return (
    <TouchableOpacity style={styles.statusItem }>
        <View style={[styles.statusImageContainer, {backgroundColor: randomColor()}]}>
            <View style={styles.statusLine}/>
            <View style={styles.statusImageInner}>
                <Image source={item.image} style={styles.image} resizeMode='cover' />
            </View>
        </View>
        <View style={styles.statusTextContainer}>
            <Text style={styles.statusText}>{item.username}</Text>
        </View>
    </TouchableOpacity> 
  )
}


const styles = StyleSheet.create({
    statusItem: {
        alignItems: 'center',
        marginRight: 10,
    },
    statusImageContainer: {
        width: 105,
        height: 105,
        position: 'relative',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusLine: {
      position: 'absolute',
      top: 5,
      left: 5,
      height: 95,
      borderRadius: 50,
      width: 95,
      borderWidth: 4,
      borderColor: '#fff',
    },
    statusImageInner: {
        width: 95,
        height: 95,
        borderRadius: 50,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: 65,
      height: 65,
      borderRadius: 50,
    },
    statusTextContainer: {
      marginTop: 10,
    },
    statusText: {
      fontSize: 15,
      fontWeight: '500',
    }
})

export default StatusComItem

