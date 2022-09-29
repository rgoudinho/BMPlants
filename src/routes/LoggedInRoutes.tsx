import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenNames from "./EnumScreenNames";

//Pages
import PageListPlants from "../pages/PageListPlants";
import Plant from "../pages/PagePlant";
import Profile from "../pages/PageProfile";
import SearchPlantsDiseases from "../pages/PageSearchPlantsDiseases";

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

          if (route.name === "PageListPlants") {
            iconName = focused ? "view-list" : "view-list-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "card-search" : "card-search-outline";
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
