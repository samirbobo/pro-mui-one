import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/*
  Paper: بتخلني اعمل زي كارد بس بسيط مش مليان بيانات كتير وبياخد عناصر زي
  sx, classes, variant (elevation | outlined), square بتعمل الكارد علي شكل مربع
  elevation 24 بتحدد مدي عمق الظل بتاع الكارد واخره
  component
*/
export default function Home() {
  return (
    <Box>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          padding: "1.75rem 2rem 0.5rem 1rem",
          mt: "22px",
        }}
      >
        <Typography fontSize={"1.3rem"} variant="h6">
          GYM
        </Typography>
        <Typography
          sx={{ fontSize: "1.4rem", fontWeight: "500", opacity: "0.8" }}
          variant="h6"
        >
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0px", right: "0px" }}>
          <CloseIcon fontSize="20px" />
        </IconButton>
      </Paper>
    </Box>
  );
}
