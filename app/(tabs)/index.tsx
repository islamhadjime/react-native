import { StyleSheet, View, Text } from 'react-native';
import HeaderHome from '../../components/headerHome';
import StatusComponent from '../../components/statusComponent';
import PostList from '../../components/PostList';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <HeaderHome />
        <StatusComponent />
        <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
