import { createContext, useState } from "react";
import Cookies from 'js-cookie'; // You'll need to install js-cookie
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        // Initialize from cookie when component mounts
        const savedToken = Cookies.get('accessToken');
        if (savedToken) {
            try {
                // Decode JWT token to get role and email
                const payload = jwtDecode(savedToken);
                return {
                    accessToken: savedToken,
                    role: payload.role,
                    email: payload.sub
                };
            } catch (e) {
                return {};
            }
        }
        return {};
    });

    // Custom setter for auth state that also handles cookie
    const setAuthWithCookie = (authData) => {
        if (authData?.accessToken) {
            // Set cookie to expire in 30m (or match your JWT expiration)
            Cookies.set('accessToken', authData.accessToken, { expires: new Date(Date.now() + 30 * 60 * 1000) });          
            setAuth(authData);
        } else {
            Cookies.remove('accessToken');
            setAuth({});
        }
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth: setAuthWithCookie }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;