import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { teal } from "@mui/material/colors";
import { useState } from "react";

const drawerWidth = 240;

export default function RootLayout() {
  const [mode, setChangeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  // عشان اكريت المود بتاع الضارك
  // هنا كده بكريت لون جديد باي اسم انا عايزه وبضيف قيمته في حاله الايت والضارك مود وبضيف للعنصر الي انا عايزه في المشروع بيتغير بشكل تلقائي
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            samir: {
              main: "#64748B",
            },
          }
        : {
            // palette values for dark mode
            samir: {
              main: teal[700],
            },
          }),
    },
  });

  // لازم استخدم المكون دا عشان كل عناصر ال ماتريال يو اي الوانها تتعرف في الايت والضارك مود
  return (
    <ThemeProvider theme={darkTheme}>
      {/* عشان ياكد علي تغير بقيه العناصر الي مش في الماتريل يو ايه من باك جرونتس */}
      <CssBaseline />

      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} setChangeMode={setChangeMode} />
      <Box
        sx={{
          ml: `${drawerWidth}px`,
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
