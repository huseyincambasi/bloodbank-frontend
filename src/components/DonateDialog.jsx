import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import axios from "axios";
import { URL } from "App";

const DonateDialog = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogInputs, setDialogInputs] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    const isAuth = Boolean(useSelector((state) => state.access_token));
    const user = useSelector((state) => state.user);
    useEffect(() => {
        if (dialogOpen && isAuth) {
            setDialogInputs((prevState) =>  ({
                ...prevState,
                ["firstName"] : user.firstName,
                ["lastName"] : user.lastName,
                ["address"] : `${user.city} - ${user.district}`,
                ["phoneNumber"] : user.phoneNumber,
                ["email"] : user.email,
            }));
        }
    }, [dialogOpen, isAuth])

    useEffect(() => {
        if (props.selectedRow) {
            setDialogOpen(true);
            setDialogInputs((prevState) =>  ({
                ...prevState,
                ["_id"] : props.selectedRow
            }));
        }
    }, [props.selectedRow]);

    const closeDialog = () => {
        setDialogOpen(false);
        props.selectedRowChanged(null);
        setDialogInputs({
            _id: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            email: "",    
        });
    };

    const handleChange = (e) => {
        setDialogInputs((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    const sendEmail = (e) => {
        e.preventDefault();
        axios.post(`${URL}/api/blood_request/donate_draft/${dialogInputs._id}/`, dialogInputs)
        closeDialog();
    }

    return (
        <Box sx={{height:400, width:'100%'}}>
            <Dialog open={dialogOpen} onClose={closeDialog}>
                <DialogTitle>Donate Blood</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To donate blood to this patient, please enter your information below. We
                        will forward your information to the person requesting blood via e-mail.
                    </DialogContentText>
                    <TextField disabled={isAuth} required margin="dense" name="firstName" value={dialogInputs.firstName} onChange={handleChange} label="First Name" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField disabled={isAuth} required margin="dense" name="lastName" value={dialogInputs.lastName} onChange={handleChange} label="Last Name" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField disabled={isAuth} required margin="dense" name="address" value={dialogInputs.address} onChange={handleChange} label="Address" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField disabled={isAuth} required margin="dense" name="phoneNumber" value={dialogInputs.phoneNumber} onChange={handleChange} label="Phone Number" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField disabled={isAuth} required margin="dense" name="email" value={dialogInputs.email} onChange={handleChange} label="Email" type="email" variant="standard" fullWidth sx={{mb: 3}}/>                
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button type="submit" onClick={sendEmail}>Donate</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default DonateDialog;