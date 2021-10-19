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
    const [isLoading, setIsLoading] = useState(true)
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
        if (password.length < 6) {
            setError("Password should be at least 6 characters")
            return
        }
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
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const signInUsingGithub = () => {
        setIsLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.messages)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                if (error.message) {
                    setError("wrong password")
                    return
                }
                setError(error.message)
            })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
            .finally(() => {
                setIsLoading(false)
            })

    }

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
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
        isLoading,
        logOut
    }

}

export default useFirebase;