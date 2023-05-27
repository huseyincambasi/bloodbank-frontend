import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Home } from "./components/Home";
import SignUp from "./scenes/signUpPage/";
import SignIn from "./scenes/signInPage";
import Navbar from "./scenes/navbar";
import { BloodRequests } from "components/BloodRequests";
import { BloodRequest } from "components/BloodRequest";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>      
        <ThemeProvider theme={theme}>
          <Navbar />
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/view-requests" element={<BloodRequests />} />
            <Route path='/request/:id' element={<BloodRequest/>} />
            <Route path='/add-request' element={isAuth ? <BloodRequest/> : <Navigate to="/sign-in" />} />
            <Route path='/my-requests' element={isAuth ? <BloodRequest/> : <Navigate to="/sign-in" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>    
    </div>
  );
}

export default App;

//<Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />}/>
//<Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />}/>
