import React, { useState } from "react";
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add"
import { Stack , Box, ThemeProvider, createTheme} from "@mui/material";
import Navbar from "./components/Navbar";

function App() {

  const [mode, setMode]= useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (

   <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar /> 
   <Stack direction="row" spacing={2} justifyContent="space-evenly">
   <Sidebar setMode={setMode} mode={mode} />
   <Feed />
   <Rightbar />
   
   </Stack>
   <Add />
   </Box>
   </ThemeProvider>

  );
}

export default App;
