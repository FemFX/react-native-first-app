import styled from "styled-components/native";
import { FC } from "react";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
`;

export interface IPost {
  title: string;
  imageUrl: string;
  createdAt: string;
}

export const Post: FC<IPost> = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
