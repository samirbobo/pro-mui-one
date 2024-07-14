import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState } from "react";
import getDesignTokens from "../styles/MyTheme";

const drawerWidth = 240;

export default function RootLayout() {
  const [mode, setChangeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  const [showSidebar, setShowSidebar] = useState(false);

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // لازم استخدم المكون دا عشان كل عناصر ال ماتريال يو اي الوانها تتعرف في الايت والضارك مود
  return (
    <ThemeProvider theme={theme}>
      {/* عشان ياكد علي تغير بقيه العناصر الي مش في الماتريل يو ايه من باك جرونتس */}
      <CssBaseline />

      <Navbar drawerWidth={drawerWidth} setShowSidebar={setShowSidebar} />
      <Sidebar
        drawerWidth={drawerWidth}
        setChangeMode={setChangeMode}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <Box
        sx={{
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "center",
          mt: "66px",
        }}
        component="main"
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
