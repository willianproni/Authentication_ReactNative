import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
import { Button, SafeAreaView, Text } from "react-native";

export function DashBoard() {
    const { signed, signOut } = useContext(AuthContext)

    function HandleLogout() {
        signOut();
    }

    return (
        <SafeAreaView>
            <Button
                title="Sair"
                onPress={HandleLogout}
            />
        </SafeAreaView>
    );
}