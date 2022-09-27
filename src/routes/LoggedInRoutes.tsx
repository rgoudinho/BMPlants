import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenNames from "./enumScreenNames";

//Pages
import PageListPlants from "../pages/PageListPlants";
import Plant from "../pages/Plant";
import Profile from "../pages/Profile";
import SearchPlantsDiseases from "../pages/SearchPlantsDiseases";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ListPlantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ScreenNames.List} component={PageListPlants} />
      <Stack.Screen name={ScreenNames.Plant} component={Plant} />
    </Stack.Navigator>
  );
}

function LoggedInRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "List") {
            iconName = focused ? "clipboard-list" : "clipboard-list-outline";
          } else if (route.name === "NewWork") {
            iconName = focused ? "plus-circle" : "plus-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-box" : "account-box-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "cornflowerblue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={ScreenNames.PageListPlants}
        component={ListPlantStack}
      />
      <Tab.Screen name={ScreenNames.Search} component={SearchPlantsDiseases} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

export default LoggedInRoutes;
