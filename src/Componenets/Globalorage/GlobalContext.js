import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
let initialState = {}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, setstate] = useState(initialState);
    const setData = (data) => {
        setstate({...data});
    }
    const GetData = async () => {
        const result = await axios.get('/home/Home', {});
        setData(result.data.UserData);
        console.log("GlobalContext in GetData........\n", state);
    }
    useEffect(() => { GetData(); }, []);
    return (
        <GlobalContext.Provider value={{
            isAdmin: state.Admin,
            Name: state.Name,
            Email: state.Email,
            setData : setData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}