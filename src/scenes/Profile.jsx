import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import dayjs from 'dayjs';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import BloodGroup from "components/BloodGroup";
import { URL } from "App";
import { setUser } from "state";

const Profile = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access_token = useSelector((state) => state.access_token);
  const [error, setError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateOfLastDonation, setDateOfLastDonation] = useState(null);
  const [newRequestNotification, setNewRequestNotification] = useState(false);
  const [regularNotification, setRegularNotification] = useState(false);
  const isError = error !== "";
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    bloodGroup: "",
    email: "",
    phoneNumber: "",
    city: "",
    district: "",
  });

  useEffect(() => {
    async function getProfileInformation () {
      await axios.get(`${URL}/api/user/info/`, {headers: {Authorization: 'Bearer ' + access_token}})
      .then((res) => {
        setProfile(res.data);
        setDateOfBirth(res.data.dateOfBirth !== null ? dayjs(res.data.dateOfBirth) : null);
        setDateOfLastDonation(res.data.dateOfLastDonation !== null ? dayjs(res.data.dateOfLastDonation): null);
        setNewRequestNotification(res.data.newRequestNotification);
        setRegularNotification(res.data.regularNotification);
      });
    }
    getProfileInformation();
  }, [access_token]);

  const updateProfile = async (e) => {
    e.preventDefault();
    axios.post(`${URL}/api/user/update/`, {...profile, dateOfBirth : dateOfBirth, dateOfLastDonation: dateOfLastDonation, newRequestNotification:newRequestNotification, regularNotification:regularNotification}, {headers: {Authorization: 'Bearer ' + access_token}})
    .then(function (response) {
      dispatch(
        setUser({
          user: response.data.user,
        })
      );
      navigate("/profile");
    })
    .catch(function (error) {
      setError(error.response.data.error);
    });
  };

  const handleChange = (e) => {
      setProfile((prevState) =>  ({        
          ...prevState,
          [e.target.name] : e.target.value
      }))
  };

  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          PROFİLE
        </Typography>
      </Box>
      <form onSubmit={updateProfile}>
        <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" } }}>
              <TextField required label="First Name" value={profile.firstName} onChange={handleChange} name="firstName" sx={{ gridColumn: "span 2" }} />
              <TextField required label="Last Name" value={profile.lastName} onChange={handleChange} name="lastName" sx={{ gridColumn: "span 2" }} />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" value={dateOfBirth} onChange={(newValue) => setDateOfBirth(newValue !== null ? dayjs(newValue) : null)} sx={{ gridColumn: "span 2" }}/>
              </LocalizationProvider>
              <Box sx={{ gridColumn: "span 2" }}>
                <BloodGroup name="bloodGroup" value={profile.bloodGroup} handleChange={handleChange} required={true} sx={{ gridColumn: "span 2" }}/>
              </Box>
              <TextField required label="Email" disabled value={profile.email} onChange={handleChange} name="email" sx={{ gridColumn: "span 2" }} />
              <TextField required label="Phone Number" value={profile.phoneNumber} onChange={handleChange} name="phoneNumber" sx={{ gridColumn: "span 2" }} />
              <TextField required label="City" value={profile.city} name="city" onChange={handleChange} sx={{ gridColumn: "span 2" }} />
              <TextField required label="District" value={profile.district} onChange={handleChange} name="district" sx={{ gridColumn: "span 2" }} />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Date of Last Donation" value={dateOfLastDonation} onChange={(newValue) => setDateOfLastDonation(newValue !== null ? dayjs(newValue): null)} sx={{ gridColumn: "span 2" }}/>
              </LocalizationProvider>
              <FormGroup sx={{ gridColumn: "span 4" }}>
                <FormControlLabel control={<Checkbox checked={newRequestNotification}/>} onChange={(event) => setNewRequestNotification(event.target.checked)} label="I want to receive e-mail notifications about new blood requests." />
                <FormControlLabel control={<Checkbox checked={regularNotification}/>} onChange={(event) => setRegularNotification(event.target.checked)} label="I want to receive e-mail notifications about regular donation information." />
              </FormGroup>
          </Box>
          {isError && (
            <Typography sx={{color: "#ba000d"}}>
              *{error}    
            </Typography>
          )}
          <Button fullWidth type="submit" sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
            Update Profile
          </Button>    
        </Box>
      </form> 
    </Box>

  );
};

export default Profile;