import { createContext, useContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();
    const [user, setUser] = useState(currentUser || { email: null });

    const login = async (email, password) => {
        
    }
}