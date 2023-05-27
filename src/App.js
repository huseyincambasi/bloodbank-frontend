import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import AddRequest from "scenes/addRequestPage";
import Home from "scenes/Home";
import Navbar from "scenes/Navbar";
import Profile from "scenes/Profile";
import SignIn from "scenes/SignIn";
import SignUp from "scenes/SignUp";
import ViewRequests from "scenes/viewRequestsPage";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.access_token));

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
            <Route path="/view-requests" element={<ViewRequests />} />
            <Route path='/request/:id' element={<AddRequest/>} />
            <Route path='/add-request' element={isAuth ? <AddRequest/> : <Navigate to="/sign-in" />} />
            <Route path='/my-requests' element={isAuth ? <Profile/> : <Navigate to="/sign-in" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>    
    </div>
  );
}

export default App;