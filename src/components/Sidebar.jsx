import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";

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

  Breakpoints: زي الميديا كويري بالظبط في ال سي اس اس 
  xs, extra-small: From 0px to 600px
  sm, small: From 600px to 900px 
  md, medium: From 900px to 1200px
  lg, large: From 1200px to 1536px
  xl, extra-large: From 1536px to larger than
*/

export default function Sidebar({
  drawerWidth,
  setChangeMode,
  showSidebar,
  setShowSidebar,
}) {
  const navigate = useNavigate();
  const theme = useTheme(); // هوك صمم من ماتريل يو اي عشان اقدر اوصل لتفاصيل الموقع الحالي من مود هل لايت ولا ضارك الالوان وهكذا
  const currentLocation = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Create", href: "/create" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout" },
  ];

  const changeAndSaveMode = () => {
    const themeValue = theme.palette.mode === "light" ? "dark" : "light";
    setChangeMode(themeValue);
    localStorage.setItem("themeMode", themeValue);
  };

  return (
    <Drawer
      sx={{
        display: { xs: showSidebar ? "block" : "none", sm: "block" }, // دي الطريقه الاولي لجعل العناصر رسبونسف علي كل الشاشات
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      open={showSidebar}
      variant={showSidebar ? "temporary" : "permanent"}
      onClose={() => setShowSidebar(false)}
      anchor="left"
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "12px" }}
          disablePadding
        >
          <IconButton onClick={changeAndSaveMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ fontSize: "1.7rem", color: "orange" }} />
            ) : (
              <Brightness4 sx={{ fontSize: "1.7rem" }} />
            )}
          </IconButton>
        </ListItem>
        <Divider />

        {links.map(({ label, href }) => (
          <ListItem
            sx={{
              bgcolor:
                currentLocation.pathname === href &&
                theme.palette.favColor.main,
            }}
            key={label}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(href);
              }}
            >
              <ListItemIcon>
                {label === "Home" ? (
                  <HomeIcon />
                ) : label === "Create" ? (
                  <CreateIcon />
                ) : label === "Profile" ? (
                  <PersonIcon />
                ) : label === "Settings" ? (
                  <SettingsIcon />
                ) : (
                  <LogoutIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
