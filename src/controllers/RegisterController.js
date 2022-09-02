import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../config/firebase';

export default function RegisterController({ navigation }, email, password, name, imageUrl) {

    const defaultImageUrl = 'https://icon-icons.com/pt/icone/masculino-menino-pessoa-pessoas-avatar/159358'

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

        const user = userCredential.user

        updateProfile(user, {
            displayName: name,
            photoURL: imageUrl ? imageUrl : defaultImageUrl
        })

        navigation.popToTop();
        console.log("Conta registrada com sucesso!")

    }).catch((error) => {
        alert(error.message)
    })
}