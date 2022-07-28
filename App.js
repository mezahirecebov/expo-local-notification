import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SheduleList from "./SheduleList";
import HomeScreen from "./HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SheduleList" component={SheduleList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
