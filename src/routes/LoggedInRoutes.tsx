import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenNames from "./EnumScreenNames";

//Pages
import PageListPlants from "../pages/PageListPlants";
import Profile from "../pages/PageProfile";
import SearchPlantsDiseases from "../pages/PageSearchPlantsDiseases";

const Tab = createBottomTabNavigator();

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
        component={PageListPlants}
      />
      <Tab.Screen name={ScreenNames.Search} component={SearchPlantsDiseases} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

export default LoggedInRoutes;
