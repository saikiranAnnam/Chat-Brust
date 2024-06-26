"use client";
import React, { useCallback, useEffect } from "react"
import { io } from "socket.io-client";


interface SocketProvderProps {
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage: (msg: string) => any;

}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProvderProps> = ({ children }) => {

    const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
        console.log("Send Message", msg);
    }, [])

    useEffect(() => {
        const _socket = io("http://localhost:8000");

        return () => {
            _socket.disconnect();
        };
    }, [])

    return (
        <SocketContext.Provider value={null}>
            {children}
        </SocketContext.Provider>
    )
}