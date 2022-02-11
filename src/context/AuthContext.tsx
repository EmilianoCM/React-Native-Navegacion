import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";


//Definir como luc, qué informacion va a tener.
export interface AuthState{
    isLoggedIn:boolean;
    userName?:string;
    favoriteIcon?:string;
}

//Estado Inicial
export const authInitialState:AuthState = {
    isLoggedIn:false,
    userName: undefined,
    favoriteIcon: undefined,
}

//Usamos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState:AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({children}:{children:JSX.Element[]}) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({type:'signIn'});
    }

    const logOut = () =>{
        dispatch({type:'logOut'});
    }

    const changeFavoriteIcon = (iconName:string) => {
        dispatch({type:'changeFavIcon', payload:iconName})
    }

    const changeUserName = (userName:string) => {
        dispatch({type:'changeUserName', payload:userName})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )

}