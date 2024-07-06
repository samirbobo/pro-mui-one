import { Link } from "react-router-dom";
import { Avatar, AppBar, Toolbar, Typography } from "@mui/material";

/*
      AppBar: بتحتوي علي عنصر الهادر وبحط فيها عناصر الناف
      some props => color= (error | primary | ...) 
      position => (static | fixed | ...)
      sx and classes
      Typography: متخصصه في تنسيق الناف وضعهم بتاخد كوتانير 
      some props => variant= (string | regular) 
        component and classes and sx
*/

export default function Navbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position="static"
    >
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", flexGrow: "1" }}>
          <Typography
            sx={{
              "&:Hover": { fontSize: "1.05rem", transition: "0.05s linear" },
            }}
            variant="body1"
            color="white"
          >
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
