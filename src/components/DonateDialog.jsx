import React, {useEffect, useState} from "react";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import axios from "axios";
import { URL } from "App";

const DonateDialog = (selectedRow) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogInputs, setDialogInputs] = useState({
        _id: "",
        name: "",
        surname: "",
        address: "",
        gsm: "",
        email_address: "",
    });

    useEffect(() => {
        setDialogOpen(true);
        setDialogInputs((prevState) =>  ({
            ...prevState,
            ["_id"] : selectedRow
        }));
    }, [selectedRow]);

    const closeDialog = () => {
        setDialogOpen(false);
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
                    <TextField required autoFocus margin="dense" name="name" value={dialogInputs.name} onChange={handleChange} label="Name" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required autoFocus margin="dense" name="surname" value={dialogInputs.surname} onChange={handleChange} label="Surname" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField required autoFocus margin="dense" name="address" value={dialogInputs.address} onChange={handleChange} label="Address" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField required autoFocus margin="dense" name="gsm" value={dialogInputs.gsm} onChange={handleChange} label="GSM" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField required autoFocus margin="dense" name="email_address" value={dialogInputs.email_address} onChange={handleChange} label="Email Address" type="email" variant="standard" fullWidth sx={{mb: 3}}/>                
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button onClick={sendEmail}>Donate</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default DonateDialog;