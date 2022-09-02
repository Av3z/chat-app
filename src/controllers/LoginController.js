import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginController(email, password) {

    signInWithEmailAndPassword(auth, email, password).then(
        console.log("Logado com sucesso!")
    ).catch((error) => { console.log(error) })
}