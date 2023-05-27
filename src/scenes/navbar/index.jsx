import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Link, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from "@mui/material";
import { Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material";
import { setMode, setLogout } from "state";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const user = useSelector((state) => state.user);
  const isUserLoggedIn = user !== null;  
  const fullName = isUserLoggedIn ? `${user.firstName} ${user.lastName}` : "";

  const rightLink = {
    fontSize: 16,
    color: 'primary',
    ml: 3,
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.5rem">
            <Typography fontWeight="bold" variant="h3" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Bloodbank Management System
            </Typography>
            {isNonMobileScreens && (
            <Typography fontWeight="bold" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
                <Link variant="h5" fontWeight="bold" underline="none" href="/view-requests" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Blood Requests
                </Link>
            </Typography>
            )}
            {isNonMobileScreens && isUserLoggedIn && (
            <Typography fontWeight="bold" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
                <Link variant="h5" fontWeight="bold" underline="none" href="/add-request" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Add New Blood Request
                </Link>
            </Typography>
            )}
        </FlexBetween>

        {isNonMobileScreens && !isUserLoggedIn && (
             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link variant="h4" fontWeight="bold" underline="none" href="/sign-in" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Sign In
                </Link>
                <Link variant="h4" fontWeight="bold" underline="none" href="/sign-up" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Sign Up
                </Link>
           </Box>
        )}

        {isNonMobileScreens && isUserLoggedIn && (
            <FlexBetween gap="2rem">
                <FormControl variant="standard" value={fullName}>
                    <Select value={fullName} sx={{backgroundColor: neutralLight, width: "150px", borderRadius: "0.25rem", p: "0.25rem 1rem", "& .MuiSvgIcon-root": {pr: "0.25rem",width: "3rem",}, "& .MuiSelect-select:focus": {backgroundColor: neutralLight}}} input={<InputBase />}>
                        <MenuItem onClick={() => navigate("/my-requests")}>Profile</MenuItem>
                        <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                    </Select>
                </FormControl>
            </FlexBetween>
        )}

        {!isNonMobileScreens && (
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                <Menu />
            </IconButton>
        )}

        {!isNonMobileScreens && isMobileMenuToggled && (
            <Box position="fixed" right="0"  bottom="0" height="100%" zIndex="10" maxWidth="500px" minWidth="300px" backgroundColor={background}>
                <Box display="flex" justifyContent="flex-end" p="1rem">
                    <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                        <Close />
                    </IconButton>
                </Box>
                <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/view-requests")} sx={{mb:5}}>
                    Blood Requests
                </Typography>
                {isUserLoggedIn && (
                    <Box>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/add-request")} sx={{mb:5}}>
                            Add New Request
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/my-requests")} sx={{mb:5}}>
                            Profile
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => dispatch(setLogout())} sx={{mb:5}}>
                            Log Out
                        </Typography>
                    </Box>
                )} 
                {!isUserLoggedIn && (
                    <Box>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/sign-in")} sx={{mb:5}}>
                            Sign In
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/sign-up")} sx={{mb:5}}>
                            Sign Up
                        </Typography>
                    </Box>  
                )} 
            </Box>
        )}



    </FlexBetween>
  );
};

export default Navbar;


/*{!isNonMobileScreens && isMobileMenuToggled && isUserLoggedIn && (
    <Box position="fixed" right="0"  bottom="0" height="100%" zIndex="10" maxWidth="500px" minWidth="300px" backgroundColor={background}>
        <Typography fontWeight="bold" fontSize="clamp(0.5rem, 0.4rem + 2vw, 1.5rem)" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
            <Link variant="h5" fontWeight="bold" underline="none" href="/my-requests" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Profile
            </Link>
        </Typography>
        <Typography fontWeight="bold" fontSize="clamp(0.5rem, 0.4rem + 2vw, 1.5rem)" color="primary" onClick={() => dispatch(setLogout())} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
            <Link variant="h5" fontWeight="bold" underline="none" href="/view-requests" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Log Out
            </Link>
        </Typography>    
    </Box>
)}

{!isNonMobileScreens && isMobileMenuToggled && !isUserLoggedIn && (
    <Box position="fixed" right="0"  bottom="0" height="100%" zIndex="10" maxWidth="500px" minWidth="300px" backgroundColor={background}>
        <Typography fontWeight="bold" fontSize="clamp(0.5rem, 0.4rem + 2vw, 1.5rem)" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
            <Link variant="h5" fontWeight="bold" underline="none" href="/sign-in" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Sign In
            </Link>
        </Typography>
        <Typography fontWeight="bold" fontSize="clamp(0.5rem, 0.4rem + 2vw, 1.5rem)" color="primary" onClick={() => dispatch(setLogout())} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
            <Link variant="h5" fontWeight="bold" underline="none" href="/sign-up" sx={{ml:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Sign Up
            </Link>
        </Typography>    
    </Box>
)}*/