import React, {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import { Button, Box, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { URL } from "../App";

export const Table = () => {
    const [data, setData] = useState([]);
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
        getTableData();
    }, []);

    const getTableData = async () => {
        await axios.get(`${URL}/api/blood_requests`).then((res) => {
            setData(res.data);
        });;
    };

    const openDialog = (event, cellValues) => {
        console.log(cellValues.row._id);
        setDialogOpen(true);
        setDialogInputs((prevState) =>  ({
            ...prevState,
            ["_id"] : cellValues.row._id
        }))
    };
  
    const closeDialog = () => {
        setDialogOpen(false);
    };

    const handleChange = (e) => {
        setDialogInputs((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        axios.post(`${URL}/api/blood_request/donate_draft/${dialogInputs._id}/`, dialogInputs)
        .then(res => {
            navigate('/table', {replace: true});
        });
    }

    const columns = [
        { field : "_id", headerName: "Id", width: 90},
        { field : "name", headerName: "Name", width: 150},
        { field : "surname", headerName: "Surname", width: 150},
        { field : "blood_product_type", headerName: "Blood Product Type", width: 150},
        { field : "city", headerName: "City", width: 150},
        { field : "district", headerName: "District", width: 150},
        { field : "contact_gsm", headerName: "Contact GSM", width: 150},
        { field : "donate_blood", headerName: "", width: 150,
            renderCell: (cellValues) => {
              return (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(event) => {
                    openDialog(event, cellValues);
                  }}
                >
                  Donate Blood
                </Button>
              );
            }
          },
    ]

    const rows = data.map((row) => ({
        _id: row._id,
        name: row.name,
        surname: row.surname,
        blood_product_type: row.blood_product_type,
        city: row.city,
        district: row.district,
        contact_gsm: row.contact_gsm,
    }));

    return (
        <div>
            <Box sx={{height:400, width:'100%'}}>
                <Typography variant='h3' component='h3' sx={{textAlign:'center', mt:3, mb:3}}>
                    Blood Requests
                </Typography>

                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Button variant="contained" href="/addbloodrequest">Add New Blood Request</Button>
                </Box>
                <DataGrid columns={columns} rows={rows} getRowId={(row) => row._id} pageSize={10} /> 
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
        </div>
    )
}