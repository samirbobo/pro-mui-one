import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { teal } from "@mui/material/colors";

// عشان اكريت المود بتاع الضارك
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // هنا كده انا بعمل لون جديد بالقيم الي انا عايزها وبسميه بالشكل الي انا عايزه وهطبقه علي الزرار الي في صفخه الكريت
    samir: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
      darker: teal[900],
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);

function App() {
  return (
    // لازم استخدم المكون دا عشان كل عناصر ال ماتريال يو اي الوانها تتعرف في الايت والضارك مود
    <ThemeProvider theme={darkTheme}>
      {/* عشان ياكد علي تغير بقيه العناصر الي مش في الماتريل يو ايه من باك جرونتس */}
      <CssBaseline />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
