import { Dialog,Box ,styled} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react'
import { useTheme } from '@mui/material/styles';
import Menu from './menu/menu'
import EmptyChat from './chatArea/EmptyChat';

import ChatBox from './chatArea/ChatBox';
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle={
  height:"95%",
  margin:"20px",
  width:"100%",
  borderRadius:0,
  maxWidth:"100%",
  maxHeight:"100%",
  boxShadow:"none",
  overflow:"hidden"

}
const Component=styled(Box)`
display:flex;`
const LeftComponent=styled(Box)`
  min-width:450px
`
const RightComponent=styled(Box)`
  width:73%;
  min-width:300px;
  height:100%;
  border-left:1px solid rgba(0,0,0,0.14);
`
function ChatDialogue() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {person}=useContext(AccountContext);
  return (
    <>
      <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} fullScreen={fullScreen} maxWidth={'md'}>
        <Component>
        <LeftComponent>
            <Menu></Menu>
        </LeftComponent>
        <RightComponent>
        {Object.keys(person).length? <ChatBox/>:<EmptyChat/>}
        </RightComponent>
        </Component>
      </Dialog>
    </>
  )
}

export default ChatDialogue
