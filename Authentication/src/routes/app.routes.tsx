import React from "react";
import { DashBoard } from "../screens/Dashboard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="DashBoard" component={DashBoard} />
        </AppStack.Navigator>
    );
}


