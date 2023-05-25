import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { URL } from "../../App";
import FlexBetween from "../../components/FlexBetween";

const signUpSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const initialValuesSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const SignUpForm = () => {
  const [error, setError] = useState("");
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isError = error !== "";

  const handleFormSubmit = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    axios.post(`${URL}/api/register/`, formData)
    .then(function () {
      navigate("/sign-in");
    })
    .catch(function (error) {
      setError(error.response.data.error);
      onSubmitProps.resetForm();
    });
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValuesSignUp} validationSchema={signUpSchema}>
      {({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm, }) => (
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}>
            <TextField label="First Name" onBlur={handleBlur} onChange={handleChange} value={values.firstName} name="firstName" error={Boolean(touched.firstName) && Boolean(errors.firstName)} helperText={touched.firstName && errors.firstName} sx={{ gridColumn: "span 2" }} />
            <TextField label="Last Name" onBlur={handleBlur} onChange={handleChange} value={values.lastName} name="lastName" error={Boolean(touched.lastName) && Boolean(errors.lastName)} helperText={touched.lastName && errors.lastName} sx={{ gridColumn: "span 2" }} />
            <TextField label="Location" onBlur={handleBlur} onChange={handleChange} value={values.location} name="location" error={Boolean(touched.location) && Boolean(errors.location)} helperText={touched.location && errors.location} sx={{ gridColumn: "span 4" }} />
            <TextField label="Occupation" onBlur={handleBlur} onChange={handleChange} value={values.occupation} name="occupation" error={Boolean(touched.occupation) && Boolean(errors.occupation)} helperText={touched.occupation && errors.occupation} sx={{ gridColumn: "span 4" }} />
            <Box gridColumn="span 4" border={`1px solid ${palette.neutral.medium}`} borderRadius="5px" p="1rem">
              <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={(acceptedFiles) =>setFieldValue("picture", acceptedFiles[0])}>
              {({ getRootProps, getInputProps }) => (
                <Box {...getRootProps()} border={`2px dashed ${palette.primary.main}`} p="1rem" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!values.picture ? 
                  (
                    <p>Add Picture Here</p>
                  ) : 
                  (
                    <FlexBetween>
                      <Typography>{values.picture.name}</Typography>
                      <EditOutlinedIcon />
                    </FlexBetween>
                  )}
                </Box>
              )}
              </Dropzone>
            </Box>
            <TextField label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" error={Boolean(touched.email) && Boolean(errors.email)} helperText={touched.email && errors.email} sx={{ gridColumn: "span 4" }} />
            <TextField label="Password" type="password" onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" error={Boolean(touched.password) && Boolean(errors.password)} helperText={touched.password && errors.password} sx={{ gridColumn: "span 4" }} />
          </Box>
          <Box>
            {isError && (<Typography sx={{color: "#ba000d"}}>
              *{error}    
            </Typography>)}
            <Button fullWidth type="submit" sx={{m: "2rem 0", p: "1rem", backgroundColor: palette.primary.main, color: palette.background.alt, "&:hover": { color: palette.primary.main }}}>
              SIGN UP
            </Button>
            <Typography sx={{textDecoration: "underline", color: palette.primary.main, "&:hover": {cursor: "pointer", color: palette.primary.light}}}>
              <Link style={{textDecoration: "none", color:'inherit'}} to={`/sign-in`}>
                Already have an account? Login here.
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;


// id int
// Full Name
// Date of Birth
// Blood Group
// Phone
// E-mail
// Password
// City
// District
// Receive e-mail notiffication
// Regular donation warning