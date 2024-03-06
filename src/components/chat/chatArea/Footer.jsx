import { Box, Input, InputBase } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import styled from '@emotion/styled';
import { uploadFile } from '../../../service/api';
const Container=styled(Box)`
    height:54px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    &>*{
        margin:5px;
        color:#919191;
    }
`
const Search=styled(Box)`
    border-radius:18px;
    width:94%;
`
const InputField=styled(InputBase)`
    padding:5px;
    width:90%;
    padding-left:15px;
    font-size:16px;

`
const ClipIcon=styled(AttachFileIcon)`
    transform:rotate(40deg);
`
const Footer = ({sendText,setValue,value,File,setFile,setImage}) => {
    useEffect(()=>{
        const getImage=async()=>{
            if(File){
                const data=new FormData();
                data.append("file",File);
                let response=await uploadFile(data); //file goes in binary format
                setImage(response.data)
            }
        }
        getImage();
    },[File])
    const onFileChange=(e)=>{
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }
    return (
    <Container>
    <SentimentSatisfiedAltIcon/> 
    <label htmlFor='fileInput'>
        <ClipIcon />
    </label>
    <Input type='file'
        id='fileInput'
        style={{display:"none"}}
        onChange={(e)=>onFileChange(e)}
    />
    <Search>
        <InputField placeholder='Type a message' onChange={(e)=>setValue(e.target.value)} onKeyDown={(e)=>sendText(e)} value={value}>
        </InputField>
    </Search>
    <MicIcon/>
    </Container>
  )
}

export default Footer
