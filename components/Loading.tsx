import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

const Loading: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Loading;
