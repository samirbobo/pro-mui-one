import { grey, teal } from "@mui/material/colors";

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
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          samir: {
            main: teal[700],
          },
          favColor: {
            main: grey[800],
          },
        }),
  },
});
export default getDesignTokens;
