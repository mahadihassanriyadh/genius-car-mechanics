import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { user } = result;
                setUser(user);     
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })     
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
            setUser({});
            })
            .catch((error) => {
            setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })

    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;