import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Drawer, Typography } from "@mui/material"
import Profile from './Profile';

const Header=styled(Box)`
  background:#008069;
  height:107px;
  color:#FFFFFF;
  display:flex;
  & > svg,& > p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
  }
`
const Component=styled(Box)`
  background:#ededed;
  height:85%;
`
const drawerStyle={
  left:20,
  top:18,
  height:'95%',
  width:'29%',
  boxShadow:'none',
}
const infodrawer = ({open,setOpen}) => {
  const handleClose=()=>{
    setOpen(false)
  }
  return (
    <Drawer 
    open={open}
    onClose={handleClose}
    PaperProps={{sx:drawerStyle}}
    style={{zIndex:1500}}
  >
    <Header>
    <ArrowBackIcon onClick={()=>setOpen(false)}></ArrowBackIcon>
    <Typography>Profile</Typography>
    </Header>
    <Component>
      <Profile></Profile>
    </Component>
  </Drawer>
  )
}

export default infodrawer
