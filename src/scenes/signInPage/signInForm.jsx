import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Formik } from "formik";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme} from "@mui/material";
import * as yup from "yup";
import { URL } from "../../App";
import { setLogin } from "../../state";

const signInSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesSignIn = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [error, setError] = useState("");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isError = error !== "";

  const handleFormSubmit = async (values, onSubmitProps) => {
    axios.post(`${URL}/api/login/`, values)
    .then(function (response) {
      dispatch(
        setLogin({
          user: response.data.user,
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        })
      );
      navigate("/");
    })
    .catch(function (error) {
      setError(error.response.data.error);
      onSubmitProps.resetForm();
    });
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValuesSignIn} validationSchema={signInSchema}>
      {({values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
            <TextField label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" error={Boolean(touched.email) && Boolean(errors.email)} helperText={touched.email && errors.email} sx={{ gridColumn: "span 4" }}/>
            <TextField label="Password" type="password" onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" error={Boolean(touched.password) && Boolean(errors.password)} helperText={touched.password && errors.password} sx={{ gridColumn: "span 4" }} />
          </Box>
          <Box>
            {isError && (<Typography sx={{color: "#ba000d"}}>
              *{error}    
            </Typography>)}
            <Button fullWidth type="submit" sx={{m: "2rem 0", p: "1rem", backgroundColor: palette.primary.main, color: palette.background.alt, "&:hover": { color: palette.primary.main }}}>
              SIGN IN
            </Button>
            <Typography sx={{textDecoration: "underline", color: palette.primary.main, "&:hover": {cursor: "pointer", color: palette.primary.light,}}}>
              <Link style={{textDecoration: "none", color:'inherit'}} to={`/sign-up`}>
                Don't have an account? Sign Up here.
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;