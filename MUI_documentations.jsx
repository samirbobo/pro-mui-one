import { Delete } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
    </>
  );
}
