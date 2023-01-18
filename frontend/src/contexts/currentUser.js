import { createContext, useState, useEffect } from "react";


export const currentUser = createContext()

function CurrentUserProvider({ children }){

    const [CurrentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
    return (
        <CurrentUserProvider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserProvider>
    )
}

export default CurrentUserProvider
