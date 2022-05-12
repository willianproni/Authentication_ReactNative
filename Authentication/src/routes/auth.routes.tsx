import React from "react";
import { SignIn } from "../screens/SignIn";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    );
}


