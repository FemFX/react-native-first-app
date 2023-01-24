import { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import styled from "styled-components";
import { IPost } from "../components/Post";
import axios from "axios";
import Loading from "../components/Loading";
import { IPostData } from "./Home";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const PostInfo = ({ route, navigation }) => {
  const [post, setPost] = useState<IPostData>({} as IPostData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    setIsLoading(true);
    axios
      .get<IPostData>(`https://63cfecd78a780ae6e67fa74c.mockapi.io/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "error");
      })
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: post.imageUrl,
        }}
      />
      <PostText>{post.title}</PostText>
    </View>
  );
};

export default PostInfo;
