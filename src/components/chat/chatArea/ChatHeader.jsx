import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Search from '@mui/icons-material/Search'
import MoreVert from '@mui/icons-material/MoreVert'
import styled from '@emotion/styled'
import { defaultProfilePicture } from '../../../constants/data'
import { AccountContext } from '../../../context/AccountProvider'
const Header=styled(Box)`
   height:44px; 
   background:#ededed;
   padding:8px 16px;
   display:flex;
   align-items:center;
`
const Image=styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
    borderRadius:'50%',
    padding:3
});
const Name=styled(Typography)`
    margin-left:12px !important;
`
const Status=styled(Typography)`
    margin-left:12px !important;
    font-size:12px;
    color:rgb(0,0,0,0.6);
`;
const RightContainer=styled(Box)`
    margin-left:auto;
    &>svg{
        margin-left:4px;
        font-size:26px;
    }
`
const ChatHeader = ({person}) => {
    const {activeUsers}=useContext(AccountContext)
  return (
    <Header>
        <Image src={person.picture} alt='dp'></Image>
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user=>user.sub===person.sub)?'online' : 'offline'}</Status>
        </Box>
        <RightContainer>
            <Search></Search>
            <MoreVert></MoreVert>
        </RightContainer>
    </Header>
  )
}

export default ChatHeader
