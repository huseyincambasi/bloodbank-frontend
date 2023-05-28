import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import BloodGroup from "components/BloodGroup";
import { URL } from "App";

const SignUp = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateOfLastDonation, setDateOfLastDonation] = useState(null);
  const [newRequestNotification, setNewRequestNotification] = useState(false);
  const [regularNotification, setRegularNotification] = useState(false);
  const isError = error !== "";
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    bloodGroup: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
    district: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${URL}/api/register`, {...user, dateOfBirth : dateOfBirth, dateOfLastDonation: dateOfLastDonation, newRequestNotification:newRequestNotification, regularNotification:regularNotification})
    .then(() => navigate("/sign-in"))
    .catch(function (error) {
      setError(error.response.data.error);
    });
  };

  const handleChange = (e) => {
    setUser((prevState) =>  ({        
        ...prevState,
        [e.target.name] : e.target.value
    }))
  };

  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SIGN UP
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <form onSubmit={handleFormSubmit}>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" } }}>
            <TextField required label="First Name" value={user.firstName} onChange={handleChange} name="firstName" sx={{ gridColumn: "span 2" }} />
            <TextField required label="Last Name" value={user.lastName} onChange={handleChange} name="lastName" sx={{ gridColumn: "span 2" }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" value={dateOfBirth} onChange={(newValue) => setDateOfBirth(newValue !== null ? dayjs(newValue) : null)} sx={{ gridColumn: "span 2" }}/>
            </LocalizationProvider>
            <Box sx={{ gridColumn: "span 2" }}>
              <BloodGroup name="bloodGroup" value={user.bloodGroup} handleChange={handleChange} required={true} sx={{ gridColumn: "span 2" }}/>
            </Box>
            <TextField required label="City" value={user.city} onChange={handleChange} name="city" sx={{ gridColumn: "span 2" }} />
            <TextField required label="District" value={user.district} onChange={handleChange} name="district" sx={{ gridColumn: "span 2" }} />
            <TextField required label="Phone Number" value={user.phoneNumber} onChange={handleChange} name="phoneNumber" sx={{ gridColumn: "span 2" }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Last Donation" value={dateOfLastDonation} onChange={(newValue) => setDateOfLastDonation(newValue !== null ? dayjs(newValue) : null)} sx={{ gridColumn: "span 2" }}/>
            </LocalizationProvider>
            <TextField required type="email" label="Email" value={user.email} onChange={handleChange} name="email" sx={{ gridColumn: "span 4" }} />
            <TextField required type="password" label="Password" value={user.password} onChange={handleChange} name="password" sx={{ gridColumn: "span 4" }} />
            <FormGroup sx={{ gridColumn: "span 4" }}>
              <FormControlLabel control={<Checkbox checked={newRequestNotification}/>} onChange={(event) => setNewRequestNotification(event.target.checked)} label="I want to receive e-mail notifications about new blood requests." />
              <FormControlLabel control={<Checkbox checked={regularNotification}/>} onChange={(event) => setRegularNotification(event.target.checked)} label="I want to receive e-mail notifications about regular donation information." />
            </FormGroup>
          </Box>
          <Box>
            {isError && (<Typography sx={{color: "#ba000d"}}>
              *{error}    
            </Typography>)}
            <Button fullWidth type="submit" sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
              SIGN UP
            </Button>
            <Typography sx={{textDecoration: "underline", color: theme.palette.primary.main, "&:hover": {cursor: "pointer", color: theme.palette.primary.light}}}>
              <Link style={{textDecoration: "none", color:'inherit'}} to={`/sign-in`}>
                Already have an account? Login here.
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;