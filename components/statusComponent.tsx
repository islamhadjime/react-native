import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { image1, image2, image3, image4, image5 } from '@/constants/Image';
import StatusComItem from './statusComItem';

export type StatusItem = {
    id: number;
    username: string;
    image: ImageSourcePropType;
}

const data: StatusItem[] = [
    {
        id: 1,
        username: 'John Doe',
        image: image5,
    },
    {
        id: 2,
        username: 'Jane Doe',
        image: image4,
    },
    {
        id: 3,
        username: 'Jim Doe',
        image: image3,
    },
    {
        id: 4,
        username: 'Jill Doe',
        image: image2,
    },
    {
        id: 5,
        username: 'Jack Doe',
        image: image1,
    },
]


const StatusComponent = () => {
  return (
    <View style={styles.statusContainer}>
        <FlatList
            data={data}
            horizontal
            renderItem={({item}) => (
                <StatusComItem item={item} />
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    statusContainer: {
      marginTop: 10,
    },

})

export default StatusComponent