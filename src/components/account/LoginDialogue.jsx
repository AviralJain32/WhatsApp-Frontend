import { useContext } from 'react'
import React from 'react'
import { Dialog ,Box,Typography,List,ListItem,styled} from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api'
const Component=styled(Box)`
  display:flex
`
const Container=styled(Box)`
  padding:56px 0 56px 56px;
`
const QrCode=styled('img')({
  height:264,
  width:264,
  margin:'50px 0 0 50px'
})
const Title=styled(Typography)`
 font-size:26px;
 color:#525252;
 font-weight:300;
 font-famity:inherit;
 margin-bottom:25px;`
 
const StyledList=styled(List)`
  &>li{
    padding:0;
    margin-top:15px;
    font-size:18px; 
    line-height:28px;
    color:#4a4a4a;
    
  }
`
const dialogStyle={
  height:"96%",
  marginTop:"12%",
  width:"60%",
  maxWidth:"100%",
  maxHeight:"100%",
  boxShadow:"none",
  overflow:"hidden"

}
function LoginDialogue() {
  const {setAccount}=useContext(AccountContext)
  const onLoginSuccess=async (res)=>{
    const decoded=jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  }
  const onLoginError=()=>{

  }
  return (
    <div>
      <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} >
        <Component>
          <Container>
            <Title>Use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>2. Go to settings by tapping on your profile photo, <strong>Menu, or Settings</strong></ListItem>
              <ListItem>3. Tap Linked Device and then Link a device</ListItem>
              <ListItem></ListItem>
            </StyledList>
          </Container>
          <Box style={{position:'relative'}}>
          <QrCode src={qrCodeImage}></QrCode>
          <Box style={{position:'absolute',top:'50%',transform:'translateX(35%)' }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
          </Box>
          </Box>
        </Component>
      </Dialog>
    </div>
  )
}

export default LoginDialogue
