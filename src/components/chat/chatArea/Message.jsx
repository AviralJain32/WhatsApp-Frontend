import styled from '@emotion/styled'
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import {formatDate} from "../../../utils/commonUtils.js"
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider.jsx'
import ImageMessage from './ImageMessage.jsx'

const SentMessage=styled(Box)({
    background:"#dcf8c6",
    maxWidth:"60%",
    marginLeft:'auto',
    padding:"5px",
    width:"fit-content",
    display:"flex",
    borderRadius:"10px",
    wordBreak:"break-word",
})

const RecievedMessage=styled(Box)({
    background:"#FFFFFF",
    maxWidth:"60%",
    marginRight:'auto',
    padding:"5px",
    width:"fit-content",
    display:"flex",
    borderRadius:"10px",
    wordBreak:"break-word",
})
const Text=styled(Typography)({
    fontSize:"16px",
    padding:"0 5px 0 5px"
})

const Time=styled(Typography)({
    fontSize:"10px",
    color:"#919191",
    // marginTop:"6px",
    wordBreak:"keep-all",
    marginTop:"auto"

})

const Message = ({message}) => {
    const TextMessage=({message})=>{
        return <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
                </>
    }
    
    const {Account}=useContext(AccountContext)
    
  return (
    <>
        {
            Account.sub===message.senderId ?

            <div>
                <SentMessage>
                
                {
                        message.type=='file' ? <div 
                        ><ImageMessage message={message} /></div>: message.text?.length >0? <TextMessage message={message}/> :""
                }
                </SentMessage>
            </div>

            : 

            <div>
                <RecievedMessage>
                {
                        message.type=='file' ? <div 
                        ><ImageMessage message={message} /></div>: <TextMessage message={message}/>
                }
                </RecievedMessage>
            </div>
        }
    </>
    
  )
}


export default Message
