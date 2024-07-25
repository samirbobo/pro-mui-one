import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Create from "./pages/Create";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Groups from "./pages/Groups";
import Gallery from "./pages/Gallery";
// import MUI_documentations from "../MUI_documentations";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="groups" element={<Groups />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    // <Route path="/" element={<MUI_documentations />} />
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
