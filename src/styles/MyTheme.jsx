import { grey, purple, teal } from "@mui/material/colors";

// نقلنا ملفات الاوان في ملف منفصل لجعل الملفات متناسقه


// عشان اكريت المود بتاع الضارك
// هنا كده بكريت لون جديد باي اسم انا عايزه وبضيف قيمته في حاله الايت والضارك مود وبضيف للعنصر الي انا عايزه في المشروع بيتغير بشكل تلقائي
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          samir: {
            main: purple[500],
            light: purple[700],
          },
          favColor: {
            main: grey[300],
          },
          favFilter: {
            main: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          },
        }
      : {
          // palette values for dark mode
          samir: {
            main: teal[500],
            light: teal[700],
          },
          favColor: {
            main: grey[800],
          },
          favFilter: {
            main: "drop-shadow(0px 2px 8px rgba(250,250,250,0.2))",
          },
        }),
  },
});
export default getDesignTokens;
