import { Box, Typography } from '@mui/material'
import React from 'react'
import {emptyChatImage} from '../../../constants/data';
import styled from '@emotion/styled';
const Component=styled(Box)`
  background:#f8f9fa;
  padding:30px 0;
  text-align:center;
  height:100vh;
`
const Container=styled(Box)`
  padding:0 200px;

`
const Image=styled('img')({
  width:400,
  marginTop:100,
  marginLeft:130,
})
const Title=styled(Typography)`
  font-size:32px;
  margin:25px 0 10px 0;
  font-family:inherit;
  font-weight:300;
  color:#41525d;

`
const SubTitle=styled(Typography)`
  font-size:14px;
  font-family:inherit;
  font-weight:400;
  color:#667781;

`
function EmptyChat() {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage}></Image>
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and recieve message without keeping your phone online.</SubTitle>
        <SubTitle>Use Wattsapp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <hr style={{margin:'40px 0',opacity:0.4,}}></hr>
      </Container>
    </Component>
  )
}

export default EmptyChat
