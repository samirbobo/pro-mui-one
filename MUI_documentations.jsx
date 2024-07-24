import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// دا الكود المستخدم عشان ارن السيرفر الوهمي بتاع الجسون عشان اربط بين الفرونت والباك
// npx json-server --watch data/db.json --port 3100
// data/db.json دا اسم الملف الي انا مسميه في المشروع بتاعي لو سميت حاجه تانيه لازم الاسم هنا يتغير كمان
// --port 3100 هنا بيقبل اي رقم وانا حطيت القيمه دي عشان ابين الفكره بتاعته

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MUI_documentations() {
  return (
    <>
      {/* 
        Typography: تستخدم في كتابه النصوص او بمعني اوضح كتابه عناصر اتش ام ال منسقه
          1- component => h1, h2, ..., h6 and others html elements
          2- variant:  دا التنسيق الي هياخده العنصر بتاعي من حجم ونوع خط وغيرهم 
          في خواص كتير بتقلها الكمبونانت بتاعتنا وي دول امثلها بسيطه عليهم الباقي موجود في 
          API موقع ماتريل يو ايه
          
          3- عشان تعمل تنسيقات اضافيه تناسب موقعك الشخصي في فيه تلت طرق ينفع يطبقه علي اي كمبونانت في المكتبه بتاعتنا
            1- Plain Css: وهي انك تعمل كلاس في ال سي اس اس عادي وتحط فيه تنسيقاتك وتضيفه للكمبونانت عادي
            2- The sx Props: نفس فكره الاستلي الي كنت بضيفه لاي عنصر اتش امل ال بس هنا اسمه اس اكس
            3- css properties: اقدر اضيف عناصر ال سي اس اس مباشره كا بروبس في الكمبونانت 
            4- color: تستخدم لاختيار الوان محدده مدعومه من المكتبه في حاله اللايت مود وي الضارك مود وبتتغير تلقائي
      */}
      <Typography
        border="4px solid red"
        color="common.white"
        className="title"
        sx={{ marginTop: "22px" }}
        component="h1"
        variant="subtitle1"
      >
        Lorem ipsum dolor sit abet consectetur adipisicing elia
      </Typography>
      {/*
          Button: 
            size: to select the size of button (small | medium default | large)
            endIcon: to but icon component in end the button
            startIcon: to but icon component in start the button
            color: to select the color of button (primary default | secondary | success | error | info)
            variant: to select the shape of button (text | contained default | outline)
        */}
      <Button
        sx={{ m: "1rem auto", display: "flex" }}
        size="medium"
        variant="contained"
        color="error"
        endIcon={<Delete />}
      >
        Click Here
      </Button>
      {/*
          IconButton: 
            children: to add the icon component in side it
            size: to select the size of button (small | medium default | large)
            color: to select the color of button (primary default | secondary | success | error | info)
            fontSize="inherit" : بتخلي بياخد حجمه بشكل تلقائي من الاب بتاعه
        */}
      <IconButton size="large" color="info">
        <MenuIcon fontSize="inherit" />
      </IconButton>

      {/* 
        Box: تستخدم في عمل عنصر اتش ام ال ليحتوي علي مجوعه من العناصر الاخره
        component, classes, sx  وبياخد عناصر زي 
        autoComplete="off" بتخلي اي عنصر جواه لو كان انبت مش بيقترح بيانات وانت بتكتب
      */}
      <Box>
        <Typography variant="h3" color="text.secondary">
          Samirrrrrrrrrrr
        </Typography>
      </Box>

      {/* 
        Container: تستخدم في عمل عنصر اتش ام ال ليحتوي علي مجوعه من العناصر الاخره ولكن يختلف عن البوكس لانه واخد تنسيقات جهزه زي 
        padding, margin 0 auto, width 100%
        component, classes, sx  وبياخد عناصر زي 
      */}
      <Container>
        <Typography variant="h3" color="text.secondary">
          Samirrrrrrrrrrr
        </Typography>
      </Container>

      {/*
        Stack: بتقوم بتنسيق العناصر علي شكل افقي او راسي زي فكره الجرد و الفليكس ولاكن هنا ابسط واسرع
        ليها بعض البروبساس زي 
        spacing | direction | divider | useFlexGap | component | sx | flexWrap
      */}

      <Stack
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        flexWrap="wrap"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </>
  );
}
