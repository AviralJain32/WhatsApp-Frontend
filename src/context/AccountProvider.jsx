import { createContext, useEffect, useRef, useState } from "react";
import {io} from "socket.io-client";
import openSocket from 'socket.io-client';


export const AccountContext=createContext(null);

function AccountProvider({children}) {
    const [Account,setAccount]=useState();
    const [person,setperson]=useState({});
    const [activeUsers, setActiveUsers] = useState([])
    const [NewMessageFlag, setNewMessageFlag] = useState(false)

    const socket=useRef();

    useEffect(()=>{
      // socket.current=io(`ws://www.wattsapp-backend.onrender.com`) //'ws://localhost:8000'||
      socket.current=io('ws://localhost:8000')
        // socket.current = openSocket('ws://www.wattsapp-backend.onrender.com', {transports: ['websocket']});
    },[])

    return (
    <AccountContext.Provider value={{
        Account,
        setAccount,
        person,
        setperson,
        socket,
        activeUsers,
        setActiveUsers,
        NewMessageFlag,
        setNewMessageFlag
    }}>{children}</AccountContext.Provider>
  )
}

export default AccountProvider
