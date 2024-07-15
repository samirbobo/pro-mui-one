import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const sendData = (body) => {
    // دا للينك السيرفر الي انا علمته باستخدم ملف الجاسون
    fetch("http://localhost:3100/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => navigate("/"));
  };

  return (
    <Box autoComplete="off" component="form" sx={{ width: "320px" }}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        onChange={(e) => setPrice(Number(e.target.value))}
        fullWidth
        label="Price"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => sendData({ title, price })}
        sx={{ mt: "22px" }}
        endIcon={<ChevronRightIcon />}
      >
        Submit
      </ColorButton>
    </Box>
  );
}
