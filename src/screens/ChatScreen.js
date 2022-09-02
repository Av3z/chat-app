import React, { useCallback, useLayoutEffect, useState } from 'react'
import { auth, db } from '../config/firebase'
import Avatar from '../components/Avatar';
import Logout from '../components/Logout';
import { GiftedChat } from 'react-native-gifted-chat';
import { query, addDoc, collection, onSnapshot, orderBy } from 'firebase/firestore';

export default function ChatScreen({ navigation }) {

    const [messages, setMessages] = useState([]);

    const logout = () => {
        auth.signOut().then(() => {
            console.log("Deslogado!")
            navigation.replace('Login')
        }).catch((error) => {
            alert(error.message)
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Avatar uri={auth?.currentUser?.photoURL} />
            ),
            headerRight: () => (
                <Logout onPress={logout} />
            )
        })
    })


    useLayoutEffect(() => {
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'))

        const unsub = onSnapshot(q, (querySnapshot) => setMessages(
            querySnapshot.docs.map(doc => ({

                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user

            }))
        ))

        return unsub
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessage => GiftedChat.append(previousMessage, messages))
        const {
            _id,
            createdAt,
            text,
            user
        } = messages[0]

        addDoc(collection(db, 'chats'), {
            _id,
            createdAt,
            text,
            user
        })

    }, [])

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL,
            }}

        />
    )
}