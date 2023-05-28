import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import BloodRequests from "components/BloodRequests";

const ViewRequests = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          BLOOD REQUESTS
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "80%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <BloodRequests />
      </Box>
    </Box>
  );
};

export default ViewRequests;