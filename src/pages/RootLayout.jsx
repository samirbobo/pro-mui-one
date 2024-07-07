import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

const drawerWidth = 240;

export default function RootLayout() {
  return (
    <>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
          mt: "66px"
        }}
        component="main"
      >
        <Outlet />
      </Box>
    </>
  );
}
