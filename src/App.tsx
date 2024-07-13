import { Box } from "@mui/material"
import Home from "./components/Home"

function App() {

  return (
    <Box sx={{ backgroundImage: "url(../public/)", backgroundSize: "cover", width: "100vw", height: "100vh" }}>
      <Home />
    </Box>
  )
}

export default App
