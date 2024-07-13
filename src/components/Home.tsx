import { Box } from "@mui/material"
import BasicMenu from "./Menu"

export default function Home() {
    return (
        <>
            <Box sx={{ backgroundColor: "cadetblue", display: "flex" }}>
                <BasicMenu />
            </Box>

            <Box>
                <h1>Home</h1>
            </Box>
        </>
    )
}