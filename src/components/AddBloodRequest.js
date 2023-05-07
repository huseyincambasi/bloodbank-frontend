import { useState } from "react"
import { useNavigate} from 'react-router-dom';
import { Button, Box, InputLabel, MenuItem, FormControl, TextField, Select, Typography } from '@mui/material'
import axios from "axios";
import { URL } from "../App";


export const AddBloodRequest = () => {
    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        blood_product_type: "",
        city: "",
        district: "",
        contact_gsm: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${URL}/api/add_blood_request/`, inputs).then(res => {
            navigate('/table', {replace: true});
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Typography variant='h6' component='h6' sx={{textAlign:'center', mt:3, mb:3}}>
                        Add Blood Request
                    </Typography>
                    <TextField required name="name" value={inputs.name} onChange={handleChange} label="Name" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="surname" value={inputs.surname} onChange={handleChange} label="Surname" variant="standard" fullWidth sx={{mb: 3}}/>
                    <FormControl fullWidth>
                        <InputLabel id="blood_product_type_label">Blood Product Type</InputLabel>
                        <Select labelId="blood_product_type_label" name="blood_product_type" value={inputs.blood_product_type} onChange={handleChange} label="Blood Product Type" fullWidth sx={{mb: 3}} >
                            <MenuItem value={"Whole"}>Whole</MenuItem>
                            <MenuItem value={"Plasma"}>Plasma</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required name="city" value={inputs.city} onChange={handleChange} label="City" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="district" value={inputs.district} onChange={handleChange} label="District" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="contact_gsm" value={inputs.contact_gsm} onChange={handleChange} label="Contact GSM" variant="standard" fullWidth sx={{mb: 3}} />
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
}