import React from 'react'
import LoginDialogue from './account/LoginDialogue'
import {AppBar,Toolbar,styled,Box} from "@mui/material";
import ChatDialogue from './chat/ChatDialogue';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
const Component=styled(Box)`
  height:110vh;
  background-color:#DCDCDC;
`
const Header=styled(AppBar)`
   height:125px;
   background-color:#00A884;
   box-shadow:none
`
const LoginHeader=styled(AppBar)`
   height:230px;
   background-color:#00bfa5;
   box-shadow:none
`
function Messenger() {
  const {Account}=useContext(AccountContext)
  return (
    <Component>
    {
      Account?
      <>
      <Header>
            <Toolbar>
            <ChatDialogue/>
            </Toolbar>
        </Header>
        </>
      :<LoginHeader>
            <Toolbar>
                <LoginDialogue></LoginDialogue>
            </Toolbar>
        </LoginHeader>
    }
        
    </Component>
    
  )
}

export default Messenger
