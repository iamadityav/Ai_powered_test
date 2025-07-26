// src/screens/FeedScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { useGetPostsQuery } from '../store/api';
import { debounce } from '../utils/debounce';

interface Post {
  id: number;
  title: string;
  body: string;
}

const FeedScreen = ({ navigation }: any) => {
  const { data: posts = [], isLoading, refetch, isFetching } = useGetPostsQuery();


  const [searchText, setSearchText] = useState('');
const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  // const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const POSTS_PER_PAGE = 10;

useEffect(() => {
  const search = debounce(() => {
    if (!searchText.trim()) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, 300);

  search();
}, [searchText, posts]);

  const handleLoadMore = () => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
    fetchPosts(1, true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('loggedIn');
    navigation.replace('Login');
  };

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.postCard}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      

      {/* <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListFooterComponent={isLoading && <ActivityIndicator size="large" color="#444" />}
      /> */}

  <TextInput
  style={styles.searchInput}
  placeholder="Search posts by title..."
  value={searchText}
  onChangeText={setSearchText}
/>


<FlatList
  data={filteredPosts}
  renderItem={renderItem}
  keyExtractor={(item) => item.id.toString()}
  onRefresh={refetch}
  refreshing={isFetching}
  ListEmptyComponent={
    !isLoading && (
      <Text style={{ textAlign: 'center', marginTop: 50 }}>No posts found.</Text>
    )
  }
/>
      <TouchableOpacity
  onPress={() => navigation.navigate('CreatePost')}
  style={{
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 30,
  }}
>
  <Text style={{ color: '#fff', fontWeight: 'bold' }}>＋</Text>
</TouchableOpacity>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'red',
    fontWeight: '600',
  },
  postCard: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    color: '#555',
  },
  searchInput: {
  backgroundColor: '#f1f1f1',
  padding: 12,
  borderRadius: 10,
  fontSize: 16,
  marginBottom: 12,
},
});
