import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { AccountContext } from '../../../context/AccountProvider';
import { GetConversation } from '../../../service/api';


const ChatBox = () => {
  const {person,Account}=useContext(AccountContext);
  const [conversation,setconversation]=useState([]);
  useEffect(()=>{
    const getConversationDetails = async()=>{
      let data =await GetConversation({senderId:Account.sub,recieverId:person.sub});
      setconversation(data);
    }
    getConversationDetails();
  },[person.sub]);
  return (
    <Box >
    <ChatHeader person={person}></ChatHeader>
    <Messages person={person} conversation={conversation} ></Messages>
    </Box>
  )
}

export default ChatBox
