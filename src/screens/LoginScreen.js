import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { auth } from '../config/firebase';
import LoginController from '../controllers/LoginController';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {

                navigation.replace('Chat');

            } else {
                navigation.canGoBack() && navigation.popToTop();
            }
        })

        return unsubscribe;
    }, [])

    return (

        <View style={tw`flex justify-center items-center h-full w-screen bg-slate-200`}>

            <View style={tw`flex flex-row`}>
                <Text style={tw`text-green-500 text-3xl font-bold mb-12`}>CHAT</Text>
                <Text style={tw`text-slate-400 text-3xl font-bold mb-12 italic`}> APP</Text>
            </View>


            <TextInput style={tw`bg-white shadow-md rounded-md w-60 mt-3 p-2`}
                placeholder='Digite seu email'
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput style={tw`bg-white shadow-md rounded-md w-60 mt-3 p-2`}
                placeholder='Digite sua senha'
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <TouchableOpacity style={tw`w-40 bg-green-500 rounded-md p-3 text-center items-center mt-7`}
                onPress={() => LoginController(email, password)}
            >
                <Text style={tw`text-white font-bold text-base`}>Login</Text>
            </TouchableOpacity>

            <View style={tw`flex flex-row mt-5`}>
                <Text>Não tem uma conta? </Text>
                <TouchableOpacity style={tw`text-slate-200`}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text>Registre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}