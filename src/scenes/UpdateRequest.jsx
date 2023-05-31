import { useState, useEffect } from "react"
import { useParams} from 'react-router-dom';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import axios from "axios";
import BloodRequestForm from "components/BloodRequestForm";
import { URL } from "App";

const UpdateRequest = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    surname: "",
    city: "",
    district: "",
    phone: "",
    email: "",
    blood_product_type: "",
    blood_group: "",
    unit: 1,
  });
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    async function getBloodRequest() {
      await axios.get(`${URL}/api/blood_request/${id}`).then((res) => {
        setInputs(res.data);
      });
    };
    getBloodRequest();
  }, [id]);

  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          UPDATE REQUEST
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <BloodRequestForm inputs={inputs} inputsChange={setInputs} url={`/api/user/blood_requests/${id}/update`} navigate={"/my-requests"} buttonName={"Update Request"}/>
      </Box>
    </Box>
  );
};

export default UpdateRequest;