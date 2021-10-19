import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();




    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const regisrationSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updataName()
                window.location.reload()
                setError("")

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const updataName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.messages)
            })
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        regisrationSubmit,
        handleName,
        handleEmail,
        handlePassword,
        error,
        user,
        signInUsingGoogle,
        signInUsingGithub,
        loginSubmit,
        logOut
    }

}

export default useFirebase;