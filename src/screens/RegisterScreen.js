import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import RegisterController from "../controllers/RegisterController";
import tw from 'twrnc';

export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [imgUrl, setImgUrl] = useState();

    return (
        <View style={tw`flex h-full w-screen items-center justify-center bg-slate-200`}>

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
                placeholder='Digite seu Nome'
                value={name}
                onChangeText={text => setName(text)}
            />

            <TextInput style={tw`bg-white shadow-md rounded-md w-60 mt-3 p-2`}
                placeholder='Coloque a URL da sua foto'
                value={imgUrl}
                onChangeText={text => setImgUrl(text)}
            />

            <TextInput style={tw`bg-white shadow-md rounded-md w-60 mt-3 p-2`}
                placeholder='Digite sua senha'
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity style={tw`w-40 bg-green-500 rounded-md p-3 text-center items-center mt-7 `}
                onPress={() => RegisterController(email, password, name, imgUrl)}
            >
                <Text style={tw`text-white font-bold text-base`}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}