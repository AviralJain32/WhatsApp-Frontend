import { useEffect,useState,useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, FormControl, FormLabel, FormHelperText, colors } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
//components
import Conversation from "./Conversation";
import styled from "@emotion/styled";
const StyledDivider=styled(Divider)`
    margin:0 0 0 70px;
    background-color:#e9edef;
    opacity:0.6;
`
const Component = styled(Box)`
    height:81vh;
    overflow:overlay;
`
const conversations = ({text}) => {
    const [users,setUsers]=useState([]);
    const {Account,socket,setActiveUsers}=useContext(AccountContext)
    useEffect(()=>{
        const fetchData=async()=>{
            let response=await getUsers();
            const filteredData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        }
        fetchData();
    },[text])
    useEffect(()=>{
        socket.current.emit('addUsers',Account);
        socket.current.on("getUsers",users=>{
            setActiveUsers(users);
        })
    },[Account])
  return (
    <>
    <Component>
        {  
            users.map((user,index)=>(
                user.sub!=Account.sub &&
                <div key={index}>
                 <Conversation user={user}></Conversation>
                 <StyledDivider></StyledDivider>
                 </div>
                 ))
        }
    </Component>
    </>
  )
}

export default conversations
