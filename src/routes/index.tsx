import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../pages/PageLogin";
import Register from "../pages/PageRegister";
import ScreenNames from "./EnumScreenNames";
import LoggedInRoutes from "./LoggedInRoutes";

const Stack = createNativeStackNavigator();

export default function Router() {
  const userLogged = false;

  if (userLogged)
    return (
      <NavigationContainer>
        <LoggedInRoutes />
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenNames.Login} component={Login} />
        <Stack.Screen name={ScreenNames.Register} component={Register} />
        <Stack.Screen
          name={ScreenNames.LoggedInRoutes}
          component={LoggedInRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
