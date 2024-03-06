import styled from "@emotion/styled"
import { Box } from "@mui/material"
import Footer from "./Footer"
import { useContext, useState,useEffect } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import { getMessages, newMessage } from "../../../service/api"
import MessageComponent from "./Message"

const Wrapper=styled(Box)`
  background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  height:82vh;
  ${'' /* overflow-y:scroll; */}
  background-size:50%; 
`
const Messages = ({person,conversation}) => {
  const [Value,setValue]=useState('');
  const [Message,setMessage]=useState([]);
  const [File, setFile] = useState(null)
  const [Image,setImage]=useState('')
  const {Account,socket,NewMessageFlag,setNewMessageFlag}=useContext(AccountContext);
  const [incomingMessage, setIncomingMessage] = useState(null)

  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
    setMessage(prev=>[...prev,incomingMessage])
  },[incomingMessage,conversation])

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data=await getMessages(conversation._id);
      setMessage(data)
    }
    conversation._id && getMessageDetails();
  },[person._id,conversation._id,NewMessageFlag])

  const sendText=async(e)=>{
    const code=e.keyCode || e.which; 
    let message;
    if(code===13){
      if(!File && !(Value.trim().length===0)){
        console.log("not a emty msg");
        message={
          senderId:Account.sub,
          recieverId:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:Value
        }
      }
      else if(File && !(Value.trim().length===0) ){
        message={
          senderId:Account.sub,
          recieverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:Image
        }
      }

      socket.current.emit('sendMessage',message);

      await newMessage(message);
      setValue('');
      setImage('');
      setFile('')
      setNewMessageFlag(prev=>!prev)
    }


  }
  
  return (
    <div>
      <Wrapper>
      <Box sx={{height:"82vh",display:"flex",flexDirection:"column-reverse",overflow:"auto",backgroundSize:"50%"}}>
        <Box>
        {
          Message && Message.map((message,index)=>(
            <Box key={index} sx={{padding:"1px 40px"}}>
            <MessageComponent message={message}/>
            </Box>
          ))
        }
        </Box>
      </Box>
      </Wrapper>
      <Footer sendText={sendText} setValue={setValue} value={Value} File={File} setFile={setFile} setImage={setImage}></Footer>
    </div> 
  )
}

export default Messages
