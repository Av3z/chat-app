import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Logout({ onPress }) {
    return (
        <TouchableOpacity style={tw`mr-2`}
            onPress={onPress}
        >
            <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
    )
}