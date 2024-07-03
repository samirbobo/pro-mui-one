import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function Navbar() {
  return (
    /*
      AppBar: بتحتوي علي عنصر الهادر وبحط فيها عناصر الناف
      some props => color= (error | primary | ...) 
      position => (static | fixed | ...)
      sx and classes
      Typography: متخصصه في تنسيق الناف وضعهم بتاخد كوتانير 
      some props => variant= (string | regular) 
        component and classes and sx
    */

    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", flexGrow: "1" }}>
          <Typography variant="body1" color="white">
            My Expenses
          </Typography>
        </Link>

        <Typography sx={{ mr: 2 }} variant="body1" color="white">
          Samir Abdo
        </Typography>
        <Avatar sx={{ background: "#003780" }} alt="Samir Abdo">
          SA
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
