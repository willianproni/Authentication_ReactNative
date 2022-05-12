import React, { useState, useContext } from "react";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import AuthContext from "../../contexts/auth";

export function SignIn() {
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const { signed, signIn, user } = useContext(AuthContext)

    console.log("Usuário está logado? :", signed)
    console.log("Informações:", user)

    function handleSignIn() {
        signIn(email, password)
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>

            <TextInput
                placeholder="Digite o Email"
                placeholderTextColor="#000"
                value={email}
                onChangeText={setEmail}
            />
            <Text>{email}</Text>

            <TextInput
                placeholder="Digite a Senha"
                placeholderTextColor="#000"
                value={password}
                onChangeText={setPassword}
            />
            <Text>{password}</Text>

            <TouchableOpacity onPress={handleSignIn}>
                <Text>SignIn</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}