import { useState, useEffect } from "react"
import { useParams} from 'react-router-dom';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import axios from "axios";
import BloodRequest from "components/BloodRequest";
import { URL } from "App";

const ViewRequest = () => {
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
    unit: "",
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
          BLOOD REQUEST
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <BloodRequest inputs={inputs} disabled={true}/>
      </Box>
    </Box>
  );
};

export default ViewRequest;