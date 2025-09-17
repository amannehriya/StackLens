import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    console.log("authcontext st")
    const [data, setData] = useState(null);
    const [isAuthenticated, SetIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const token = async () => {

        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                credentials: 'include',
                method: 'GET'
            })

            const data = await res.json();
            if (res.ok && data.status) {
                setData(data.data)
                SetIsAuthenticated(data.status)
            } else {
                setData(null)
                SetIsAuthenticated(false)
            }
        } catch (error) {
            setData(null)

            console.log('error while fetching profile data', error)

        } finally {
            setLoading(false);
        }



    }

    useEffect(() => {
        token();
    }, [])


    const myData = {
        name: data?.username,
        email: data?.email,
        id: data?._id
    }

    return (
        <AuthContext.Provider value={{ data, setData, myData, isAuthenticated, loading, SetIsAuthenticated, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }