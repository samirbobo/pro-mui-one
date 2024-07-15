import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

/*
  Paper: بتخلني اعمل زي كارد بس بسيط مش مليان بيانات كتير وبياخد عناصر زي
  sx, classes, variant (elevation | outlined), square بتعمل الكارد علي شكل مربع
  elevation 24 بتحدد مدي عمق الظل بتاع الكارد واخره
  component
*/
export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3100/myData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:3100/myData/${id}`, {
      method: "DELETE",
    }).then(() => fetchData());
  };

  return (
    <Box>
      {data.map((item) => (
        <Paper
          key={item.id}
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
            {item.title}
          </Typography>
          <Typography
            sx={{ fontSize: "1.4rem", fontWeight: "500", opacity: "0.8" }}
            variant="h6"
          >
            ${item.price}
          </Typography>
          <IconButton
            onClick={() => deleteItem(item.id)}
            sx={{ position: "absolute", top: "0px", right: "0px" }}
          >
            <CloseIcon fontSize="20px" />
          </IconButton>
        </Paper>
      ))}
    </Box>
  );
}
