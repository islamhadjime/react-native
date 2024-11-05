import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { post1,image5 } from '@/constants/Image'
import { Ionicons } from '@expo/vector-icons'
import { PostType } from './PostList'

import { randomColor } from '@/utils/randomColor'



const Post = ({post}: {post: PostType}) => {
  return (
    <View style={styles.postContainer}>
        <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
                <View style={styles.postHeaderLeftContentUser}>
                    <View style={[styles.statusImageContainer, {backgroundColor: randomColor()}]}>
                        <View style={styles.statusLine}/>
                        <View style={styles.statusImageInner}>
                            <Image source={image5} style={styles.statusImageInnerI} resizeMode='cover' />
                        </View>
                    </View>
                </View>
                <View style={styles.postHeaderLeftContent}>
                    <Text style={styles.postHeaderLeftContentText}>Jenny Wilson created a new post </Text>
                    <Text style={styles.postHeaderLeftContentTextTime}>10 minutes ago</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.postHeaderRight}>
                <Ionicons name="ellipsis-horizontal" size={30} color="#838181" />
            </TouchableOpacity>
        </View>
        <View style={styles.postBody}>
            <Image source={post1} style={styles.image} resizeMode='cover' />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    statusImageContainer: {
      width: 60,
      height: 60,
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
      height: 50,
      borderRadius: 50,
      width: 50,
      borderWidth: 4,
      borderColor: '#fff',
    },
    statusImageInner: {
      width: 40,
      height: 40,
      borderRadius: 50,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusImageInnerI: {
      width: '100%',
      height: '100%',
    },

    postBodyImage: {
      width: '100%',
      height: '100%',
    },


    postContainer: {
      flex: 1,
      marginHorizontal: 0,
      marginTop: 30,
    },
    postHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    postHeaderLeft:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    postHeaderLeftContentUser:{
      marginRight: 10,
    },
    postHeaderLeftContent:{
    },
    postHeaderLeftContentText:{
      fontWeight: 'bold',

    },
    postHeaderLeftContentTextTime:{
      color: '#808080',
      marginTop:5,
    },
    postHeaderRight:{
    },
    postBody:{
      width: '100%',
      height: 300,
      overflow: 'hidden',
      borderRadius: 10,
    },
    image:{
      width: '100%',
      height: '100%',
    },

})

export default Post
