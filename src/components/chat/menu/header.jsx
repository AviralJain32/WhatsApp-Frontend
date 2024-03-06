import {useContext,useState} from "react";
import React from 'react'
import {Box,styled} from '@mui/material';
import { AccountContext } from "../../../context/AccountProvider";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';

//components 
import HeaderMenu from "./headerMenu";
import InfoDrawer from "../../drawer/infodrawer";

const Wrapper=styled(Box)`
  margin-left:auto;
  &>*{
    margin-left:18px;
    padding:1px;
    color:#000;
  };
  &:second-child{
    margin-top:4px;
  }
`

const Component=styled(Box)`
  height:44px;
  background:#ededed;
  padding:8px 16px;
  display:flex;
  align-items:center;
`
const Image=styled("img")({
  height:40,
  weight:40,
  borderRadius:'50%',

})
const header = () => {
  const [OpenDrawer,setOpenDrawer]=useState(false);
    const {Account}=useContext(AccountContext);
    const toggleDrawer=()=>{
      setOpenDrawer(true);
    }
  return (
    <>
      <Component>
        <Image src={Account.picture} alt="dp" onClick={toggleDrawer}/>
        <Wrapper>
        <DonutLargeIcon></DonutLargeIcon>
        <ChatIcon></ChatIcon>
        <HeaderMenu setOpenDrawer={setOpenDrawer}></HeaderMenu>
        </Wrapper>
      </Component>
      <InfoDrawer open={OpenDrawer} setOpen={setOpenDrawer}></InfoDrawer>
    </>
  )
}

export default header
