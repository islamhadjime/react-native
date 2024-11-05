import React from 'react'

import { View, Text,StyleSheet,FlatList } from 'react-native'
import { image1,post1,post2} from '@/constants/Image'
import Post from './Post'

export type PostType = {
  id:number,
  username:string,
  image:string,
  date:string,
  countLikes:number,
  countComment:number
}
export const postListData:PostType[] = [
  {
    id: 1,
    username: 'user1',
    image: image1,
    date: '2021-01-01',
    countLikes: 100,
    countComment: 20
  },
  {
    id: 2,
    username: 'user2',
    image: post1,
    date: '2021-02-01',
    countLikes: 150,
    countComment: 30
  },
  {
    id: 3,
    username: 'user3',
    image: post2,
    date: '2021-03-01',
    countLikes: 200,
    countComment: 40
  }
]


const PostList = () => {
  return (
    <View style={styles.postListContainer}>
        <FlatList
            data={postListData}
            renderItem={({item}) => <Post post={item} />}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    postListContainer: {
        flex: 1,
        marginHorizontal: 0,
    }
})

export default PostList