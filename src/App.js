import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Home } from "./components/Home";
import SignUp from "./scenes/signUpPage/";
import SignIn from "./scenes/signInPage";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>    
    </div>
  );
}

export default App;

//<Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />}/>
//<Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />}/>
