import { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Alert,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { IPost, Post } from "../components/Post";
import axios from "axios";
import Loading from "../components/Loading";

export interface IPostData extends IPost {
  id: number;
}

export const Home = ({ navigation }) => {
  const [items, setItems] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get<IPostData[]>("https://63cfecd78a780ae6e67fa74c.mockapi.io/posts")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "error");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View>
      <FlatList
        data={items}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Post", { id: item.id, title: item.title })
            }
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
