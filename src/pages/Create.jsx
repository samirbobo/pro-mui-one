import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// styled : فانكش بتجهز نوع المكون الي هعمل عليه تنسيقات ال سي اس اس
// getContrastText فانكشن بتاخد قيمه اللون بتاع الباك جروند عشان تلاقي لون مناسب للكلام الي جواه 
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  backgroundColor: theme.palette.samir.main,
  "&:hover": {
    // backgroundColor: purple[700],
    // كده قدرت استخدم اللون الي انشاته جديد
    backgroundColor: theme.palette.samir.light,
  },
}));

export default function Create() {
  return (
    <Box component="form" sx={{ width: "320px" }}>
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton sx={{ mt: "22px" }} endIcon={<ChevronRightIcon />}>
        Submit
      </ColorButton>
    </Box>
  );
}
