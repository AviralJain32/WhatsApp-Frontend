import { useContext } from "react"
import { Box, Typography } from "@mui/material"
import { AccountContext } from "../../context/AccountProvider"
import styled from "@emotion/styled"
const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;

`
const Image=styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding:'25px 0',
})
const BoxWrapper=styled(Box)`
    background:#FFF;
    padding:12px 30px 2px;
    box-shadow:0 1px 3px rgba(0,0,0,0.1);
    & :first-child{
        font-size:13px;
    }
    & :last-child{
        margin:14px 0;
    }
`
const DescriptionContainer=styled(Box)`
    &>p{
        font-size:15px;
        color:#8696a0;
    }
`
const Profile = () => {
 const {Account}=useContext(AccountContext);
  return (
    <>
       <ImageContainer>
            <Image src={Account.picture} alt="profile" />
       </ImageContainer>
       <BoxWrapper>
            <Typography className="text-teal-600 font-extralight">Your name</Typography>
            <Typography >{Account.name}</Typography>
       </BoxWrapper>
       <DescriptionContainer className="p-7 text-sm" >
        <Typography >This name comes from your google account and visible to all other contacts</Typography>
       </DescriptionContainer>
       <BoxWrapper>
        <Typography className="text-teal-600 font-extralight">About</Typography>
        <Typography>Constantly Learning</Typography>
       </BoxWrapper>

    </>
  )
}

export default Profile
