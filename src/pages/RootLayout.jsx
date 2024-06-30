import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function RootLayout() {
  return (
    <main>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Typography>

      <Outlet />
    </main>
  );
}
