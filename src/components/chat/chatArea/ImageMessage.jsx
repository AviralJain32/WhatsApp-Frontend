import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import {formatDate,downloadMedia} from "../../../utils/commonUtils.js"
import { useContext, useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { iconPDF } from '../../../constants/data.js';
import { AccountContext } from '../../../context/AccountProvider.jsx';


const Time=styled(Typography)({
    fontSize:"10px",
    color:"#919191",
    wordBreak:"keep-all",
    marginTop:"auto",
    padding:"2px",
    borderRadius:"2px"
})

const ImageMessage=({message})=>{
    const {Account}=useContext(AccountContext)
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{position:'relative'}}>
            {
                message?.text?.includes('.pdf')?
                <Box sx={{display:'flex'}}>
                <img src={iconPDF} alt={"pdf"} width={"100px"}/>
                <Typography>{message.text.split('/').pop()}</Typography>
                </Box>
                :
                <>
                <img onClick={()=>{setOpen(true)}} style={{maxWidth:'30rem' , objectFit:'cover',height:'100%'}}src={message.text} alt={message.text} />
                <Modal
                    open={open}
                    onClose={()=>setOpen(false)}
                    
                >
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',alignContent:'center',height:"100%",width:"100%",bgcolor:"#0b0f19"}}>
                        <Box sx={{background:"rgba(11,15,25,0.5)",position:'fixed',top:'10px',right:"10px",padding:"10px",width:"12%",display:'flex',justifyContent:"space-around",borderRadius:'10px'}}>
                        <div onClick={(e)=>downloadMedia(e,message.text)}><DownloadIcon sx={{mr:"2%",color:'white'}} fontSize='large' /></div>
                            <div onClick={(e)=>setOpen(false)}>
                            <CloseIcon sx={{color:'white'}} fontSize='large'/>
                            </div>
                        </Box>
                        <img src={message.text} style={{maxWidth:'90%',maxHeight:'90%'}}></img>
                        </Box>
                        </Modal>
                </>
            }
            {message?.text?.includes('.pdf')?<div onClick={(e)=>downloadMedia(e,message.text)}><DownloadIcon sx={{border:"1px solid black",borderRadius:"50%"}} fontSize='medium'/></div>:<></>}
            <Time style={{position:'absolute',bottom:0,right:0,backgroundColor:Account.sub===message.senderId?"#dcf8c6":"#ffffff"}}>
            {formatDate(message.createdAt)}
            </Time>

        </Box>
    )
}

export default ImageMessage