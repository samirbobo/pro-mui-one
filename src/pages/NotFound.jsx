import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" color={theme.palette.error.main}>
        There is no design yet
        <br />
        <br />
        Please try agin later...
      </Typography>
    </Box>
  );
}
