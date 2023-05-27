import { useState, useEffect } from "react"
import { useNavigate, useParams} from 'react-router-dom';
import { Button, Box, InputLabel, MenuItem, FormControl, TextField, Select, Typography } from '@mui/material'
import axios from "axios";
import { URL } from "../App";


export const BloodRequest = () => {
    const { id } = useParams();
    const [showSubmitButton, setShowSubmitButton] = useState(true);
    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        city: "",
        district: "",
        contact_gsm: "",
        email_address: "",
        blood_product_type: "",
        blood_group: "",
        number_of_units: "",
    });

    const getBloodRequest = async () => {
        await axios.get(`${URL}/api/blood_request/${id}`).then((res) => {
            setInputs(res.data);
        });
    };

    useEffect(() => {
        if (id !== null && id !== undefined) {
            getBloodRequest();
            setShowSubmitButton(false);
        }
    }, []);

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
            navigate('/bloodrequests', {replace: true});
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box>
                    {showSubmitButton && <Typography variant='h6' component='h6' sx={{textAlign:'center', mt:3, mb:3}}>
                        Add Blood Request
                    </Typography>
                    }
                    {!showSubmitButton && <Typography variant='h6' component='h6' sx={{textAlign:'center', mt:3, mb:3}}>
                        Blood Request Details
                    </Typography>
                    }
                    <TextField required name="name" value={inputs.name} onChange={handleChange} label="Name" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="surname" value={inputs.surname} onChange={handleChange} label="Surname" variant="standard" fullWidth sx={{mb: 3}}/>
                    <TextField required name="city" value={inputs.city} onChange={handleChange} label="City" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="district" value={inputs.district} onChange={handleChange} label="District" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="contact_gsm" value={inputs.contact_gsm} onChange={handleChange} label="Contact GSM" variant="standard" fullWidth sx={{mb: 3}} />
                    <TextField required name="email_address" value={inputs.email_address} onChange={handleChange} label="Email Address" type="email" variant="standard" fullWidth sx={{mb: 3}}/>                
                    <FormControl fullWidth>
                        <InputLabel id="blood_product_type_label">Blood Product Type</InputLabel>
                        <Select labelId="blood_product_type_label" name="blood_product_type" value={inputs.blood_product_type} onChange={handleChange} label="Blood Product Type" fullWidth sx={{mb: 3}} >
                            <MenuItem value={"Whole"}>Whole</MenuItem>
                            <MenuItem value={"Plasma"}>Plasma</MenuItem>
                            <MenuItem value={"Platelet"}>Platelet</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="blood_group_label">Blood Group</InputLabel>
                        <Select labelId="blood_group_label" name="blood_group" value={inputs.blood_group} onChange={handleChange} label="Blood Group" fullWidth sx={{mb: 3}} >
                            <MenuItem value={"A+"}>A+</MenuItem>
                            <MenuItem value={"A-"}>A-</MenuItem>
                            <MenuItem value={"B+"}>B+</MenuItem>
                            <MenuItem value={"B-"}>B-</MenuItem>
                            <MenuItem value={"0+"}>0+</MenuItem>
                            <MenuItem value={"0-"}>0-</MenuItem>
                            <MenuItem value={"AB+"}>AB+</MenuItem>
                            <MenuItem value={"AB-"}>AB-</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required name="number_of_units" value={inputs.number_of_units} onChange={handleChange} label="Number of Units" variant="standard" fullWidth sx={{mb: 3}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                    {showSubmitButton && <Button type="submit">Submit</Button>}
                </Box>
            </form>
        </div>
    )
}