import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.jpeg";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

{
  /*
    - Card: بيخلني استخدم مجموعه من الاكواد علشان اطلع شكل يو اي مرتبط مع بعضه وصعب
    --- props:
    ---- classes عمل كلاساس لتنسيقات باستخدام سي اس اس
    ---- raised [false default | true] بتعملي زي شادو في الوضع الفاتح وي بتعمل تفتيح للباك كروند في الوضع المظلم
    ---- sx للتنسيقات باسلوب الستايل

    - CardHeader في التفاصيل الخاصه بعنوان الكارد زي صوره الشخص و العنوان وايكون لاضافه بعض الخيارات الاخري
    --- props:
    ---- avatar لوضع الصوره
    ---- classes للتنسيقات بي ال سي اس اس
    ---- component [div default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
    ---- disableTypography لو استخدمت البروبس دي هيلغي التنسيقات الجاهزه لكل من العنوان الاساسي و الفرعي غير محبوب استخدمها
    ---- sx للتنسيقات باستخدام ال ستايل
    ---- title بحط جواه نص وبيعبر عن عنوان الكارد الرئيسي
    ---- subheader بحط جواه نص وبيعبر عن عنوان الكارد الفرعي

    - CardMedia تستخدم في عرض صوره كمحتوي للكارد بتاعي
    --- props:
    ---- classes للتنسيقات بي ال سي اس اس
    ---- sx للتنسيقات باستخدام ال ستايل
    ---- component [img default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
    ---- image بكتب فيها المسار بتاع الصوره عشان تتعرض
    ---- src زي الخصيه السابقه

    - CardContent بكتب جواها مكتوي الكارد من نصوص وغيره
    --- props:
    ---- classes للتنسيقات بي ال سي اس اس
    ---- sx للتنسيقات باستخدام ال ستايل
    ---- component [div default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه

    - CardActions بكتب جواها العناصر الي هتعمل امر ما
    --- props:
    ---- classes للتنسيقات بي ال سي اس اس
    ---- sx للتنسيقات باستخدام ال ستايل
    ---- disableSpacing  لعمل مساحات بين العناصر

    - Collapse 
    --- props:
    ---- classes للتنسيقات بي ال سي اس اس
    ---- sx للتنسيقات باستخدام ال ستايل
    ---- in [true | false default] لو غلط يبقي المحتوي مقفول لو صح يبقي مفتوح
    ---- orientation بيعبر عن كيفيه ظهور العناصر الي بداخله لامه تظهر تحت بعض بشكل في انيميشن او تظهر من الشمال لليمين
    ---- timeout بيعبر عن الوقت الي بيستغرقه الكارد في الفتح وي القفل بي المللي ثانيه وليها ثلاث قيم
    ------ auto وهنا بيحسب سرعه القفل والفتح تلقائي علي طول الكارد
    ------ number بيقبل قيمه عداديه وبتتحول باللملي ثانيه
    ------ {appear: 100, enter: 2000, exit: 1000} 
    -------- enter هياخد وقت قد اي علي ما يفتح
    -------- exit هياخد وقت قد اي علي ما يقفل
    -------- الوقت الفاصل بين الامرين
  */
}

export default function Groups() {
  const persons = [
    {
      name: "Alaa Hassan",
      color: "#053ea8",
      image: person1,
      date: "September 14, 2016",
      img: "A",
    },
    {
      name: "Do3aa Hassan",
      color: "#a020f0",
      image: person2,
      date: "September 14, 2016",
      img: "D",
    },
    {
      name: "Ali Hassan",
      color: "#008080",
      image: person3,
      date: "September 14, 2016",
      img: "A",
    },
    {
      name: "Samir Hassan",
      color: "#053ea8",
      image: person4,
      date: "September 14, 2016",
      img: "S",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: "0px", sm: "1rem", md: "0px" } }}>
      {persons.map((person) => (
        <Card
          key={person.name}
          sx={{ maxWidth: { xs: "90%", sm: 445 }, mx: "auto", mb: 5 }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  color: theme.palette.getContrastText(person.color),
                  bgcolor: person.color,
                }}
                aria-label="person name"
              >
                {person.img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={person.name}
            subheader={person.date}
          />

          <CardMedia
            component="img"
            height="194"
            image={person.image}
            alt="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>

            <Box flexGrow={1} />

            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </CardActions>
        </Card>
      ))}

      {renderMenu}
    </Box>
  );
}

/* 
<Collapse in={expanded} timeout={{appear: 100, enter: 1000, exit: 500}} unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> 
*/
