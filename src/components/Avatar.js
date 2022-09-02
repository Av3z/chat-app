import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

export default function Avatar({ uri }) {
    return (
        <View>
            <Image style={tw`rounded-full w-10 h-10 p-0 mt- ml-1`} source={{ uri: uri }} />
        </View>
    )
}