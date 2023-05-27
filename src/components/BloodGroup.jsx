import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const BloodGroup = ({ name, value = '', handleChange }) => {
  return (
    <FormControl fullWidth>
        <InputLabel id="blood_group_label">Blood Group</InputLabel>
        <Select labelId="blood_group_label" name={name} value={value} onChange={handleChange} label="Blood Group" fullWidth>
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
  );
};

export default BloodGroup;