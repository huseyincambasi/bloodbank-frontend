import { useState } from "react"
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import BloodRequestForm from "components/BloodRequestForm";

const AddRequest = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    city: "",
    district: "",
    phone: "",
    email: "",
    blood_product_type: "",
    blood_group: "",
    unit: 0,
  });
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
            NEW REQUEST
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <BloodRequestForm inputs={inputs} inputsChange={setInputs} url={"/api/user/add_blood_request"} navigate={"/view-requests"} buttonName={"Add Request"}/>
      </Box>
    </Box>
  );
};

export default AddRequest;