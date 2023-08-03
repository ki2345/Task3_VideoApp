import React, { createContext, useMemo, useContext } from 'react';
import {io} from 'socket.io-client';

const SocketContext = createContext(null);

//custom hook -- made by user
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketProvider = (props) => {
    const socket = useMemo(() => io('localhost:8000', []))
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

