import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, useTheme } from '@mui/material'
import { URL } from "App";
import BloodRequest from "./BloodRequest";

const BloodRequestForm = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const access_token = useSelector((state) => state.access_token);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${URL}${props.url}`, props.inputs, {headers: {Authorization: 'Bearer ' + access_token}}).then(res => {
            navigate(`${props.navigate}`, {replace: true});
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <BloodRequest inputs={props.inputs} inputsChange={props.inputsChange} />
            <Button fullWidth type="submit" sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
                {props.buttonName}
            </Button>  
        </form>
    )
}

export default BloodRequestForm;