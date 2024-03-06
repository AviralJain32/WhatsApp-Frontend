import { Box, Typography,colors,styled } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import {GetConversation, SetConversation} from '../../../service/api';
import { formatDate } from "../../../utils/commonUtils";
const Component=styled(Box)`
  display:flex;
  height:60px;
  padding:13px 0;
  cursor:pointer;

`
const Image=styled('img')({
  width:75,
  borderRadius:'50%',
  padding:'0 14px',
  objectFit:'cover',
})
const text={fontSize:'14px',
color:"rgb(128,128,142)",
}
const Conversation = ({user}) => {
  const {setperson,Account,NewMessageFlag}=useContext(AccountContext);
  const [message, setMessage] = useState({})
  useEffect(()=>{
    const getConversationDetails=async()=>{
      const data=await GetConversation({senderId:Account.sub,recieverId:user.sub})
      console.log(data.message);
      setMessage({text:data?.message,timetamp:data?.updatedAt})
    }
    getConversationDetails();
    console.log(NewMessageFlag);
  },[NewMessageFlag])
  
  const getUser=async()=>{
    setperson(user);
    const id=await SetConversation({senderId:Account.sub,recieverId:user.sub});
  }
  const extentions=[".png",".jpeg",".jpg",".pdf",".svg"]
  return (
    <Component onClick={()=>getUser()}>
        <Box>
            <Image src={user.picture} alt="dp" />
        </Box>
        <Box sx={{width:'100%'}}>
            <Box sx={{display:'flex'}}>
                <Typography>{user.name}</Typography>
                {
                  message?.text && <Typography sx={{fontSize:'12px',marginLeft:'auto',color:"#000099",marginRight:'20px'}}>{formatDate(message?.timetamp)}</Typography>
                }
            </Box>
            <Box>
              <Typography style={text}>{(extentions.some((extention)=>{return message?.text?.includes(extention)}))?'media' : (message?.text?.length>40?`${message?.text?.slice(0,40)}...`:message.text)}</Typography>
            </Box>
        </Box>
    </Component>
  )
}

export default Conversation
