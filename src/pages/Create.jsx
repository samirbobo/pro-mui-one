import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => sendData(data);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      sx={{ width: "320px" }}
    >
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
        error={Boolean(errors.title)}
        helperText={
          // eslint-disable-next-line no-extra-boolean-cast
          Boolean(errors.transaction)
            ? "This field is required & min 3 character"
            : null
        }
      />
      <TextField
        fullWidth
        label="Price"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        {...register("price", { required: true, min: 1 })}
        error={Boolean(errors.price)}
        // eslint-disable-next-line no-extra-boolean-cast
        helperText={Boolean(errors.price) ? "The minimum price is 1$" : null}
        variant="filled"
      />
      <ColorButton
        // onClick={() => sendData({ title, price })}
        sx={{ mt: "22px" }}
        type="submit"
        endIcon={<ChevronRightIcon />}
      >
        Submit
      </ColorButton>
    </Box>
  );
}
