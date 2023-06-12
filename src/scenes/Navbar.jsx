import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { setLogout } from "state";
import FlexBetween from "components/FlexBetween";
import { Menu} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuList from '@mui/material/MenuList';


const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [fullName, setFullName] = useState();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(useSelector((state) => state.access_token));

  useEffect(() => {
    setFullName(isAuth ? `${user.firstName} ${user.lastName}` : "")  
  }, [isAuth])

  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const handleClick = (e) => {
      setMenu(e.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.5rem">
            <Typography fontWeight="bold" variant="h3" color="primary" onClick={() => navigate("/")} sx={{"&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Bloodbank Management System
            </Typography>
            {isNonMobileScreens && (
            <Typography fontWeight="bold" variant="h5" color="primary" onClick={() => navigate("/view-requests")} sx={{ml:3, mr:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                Blood Requests
            </Typography>
            )}
            {isNonMobileScreens && isAuth && (
                <FlexBetween>
                    <Typography fontWeight="bold" variant="h5" color="primary" onClick={() => navigate("/add-request")} sx={{ml:3, mr:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                        Add New Blood Request
                    </Typography>
                    <Typography fontWeight="bold" variant="h5" color="primary" onClick={() => navigate("/my-requests")} sx={{ml:3, mr:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                        My Blood Requests
                    </Typography>
                </FlexBetween>
            )}
        </FlexBetween>

        {isNonMobileScreens && !isAuth && (
             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Typography fontWeight="bold" variant="h4" color="primary" onClick={() => navigate("/sign-in")} sx={{ml:3, mr:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Sign In
                </Typography>
                <Typography fontWeight="bold" variant="h4" color="primary" onClick={() => navigate("/sign-up")} sx={{ml:3, mr:3, "&:hover": {color: primaryLight, cursor: "pointer"}}}>
                    Sign Up
                </Typography>
           </Box>
        )}

        {isNonMobileScreens && isAuth && (
            <div>
            <Button id="basic-button"
            sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            variant="contained">{fullName}</Button>
            <Menu
      
        
        id="menu"
        anchorEl={menu}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
        }}
        
      >
    
    <MenuItem fontWeight="bold" variant="h4" color="primary" onClick={() => {navigate("/profile");handleClose()}}>Profile</MenuItem>
    <MenuItem fontWeight="bold" variant="h4" color="primary" onClick={() => {dispatch(setLogout());handleClose()}}>Log Out</MenuItem>
              
      </Menu>

                    
                 
                  </div>
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
                {isAuth && (
                    <Box>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/add-request")} sx={{mb:5}}>
                            Add New Request
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/my-requests")} sx={{mb:5}}>
                            My Blood Requests
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => navigate("/profile")} sx={{mb:5}}>
                            Profile
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" onClick={() => dispatch(setLogout())} sx={{mb:5}}>
                            Log Out
                        </Typography>
                    </Box>
                )} 
                {!isAuth && (
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