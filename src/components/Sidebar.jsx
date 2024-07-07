import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

/*
  Drawer: بتعمل سايد بار جهزه وليها بروبساس كتير زي 
  - sx => to add style css component
  - variant => شكل وطبيعه السايد بار وفي منها تلت انواع رسبونسف و وموقت بيظهر لما ادوس علي زر معين و اخيرا الثابت
  (permanent | temporary Default | persistent)
  anchor => مكان ظهور السايد بار 
  (Left | Right | Top | Bottom )

  Divider => بيعمل زي خط فاصل بين العناصر

  List => ul بتعملي قائمه من العناصر زي
  ListItem => li بتشتغل علي اضافه عنصر عنصر زي 
  ListItemButton => بتخلني اضيف جواها محتوي العنصر والفانكشن الي هتم فيه
  ListItemIcon => بحط جواها الايكون 
  ListItemText => بحط جواها محتوي النصي للعنصر 

  علشان اشغل فكره اللينك في اربع طرق 
  1- ListItemButton component="a" href="/"
  2- Link from material ui href="/"
  3- Link from react-router 
  4- useNavigate from react-router 
*/
export default function Sidebar({ drawerWidth }) {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/profile");
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/logout");
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
