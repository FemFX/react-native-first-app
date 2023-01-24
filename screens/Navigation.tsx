import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { Post } from "../components/Post";
import { NavigationContainer } from "@react-navigation/native";
import PostInfo from "./PostInfo";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Articles" }}
        />
        <Stack.Screen
          name="Post"
          component={PostInfo}
          options={{ title: "Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
