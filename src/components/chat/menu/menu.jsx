import { Box } from "@mui/material"
import Header from "./header"
import Search from "./search"
import Conversations from "./conversations"
import { useState } from "react"
function menu() {
  const[text,settext]=useState(" ");
  return (
    <Box>
      <Header></Header>
      <Search settext={settext}></Search>
      <Conversations text={text}></Conversations>
    </Box>
  )
}

export default menu
