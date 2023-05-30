import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useState,useEffect } from 'react';

const BloodProduct = ({ name, value = '', handleChange, required = false, disabled = false}) => {

  

  
  return (
    <FormControl fullWidth>
        <InputLabel id="blood_product_type_label">Blood Product Type</InputLabel>
        <Select disabled={disabled} required={required} labelId="blood_product_type_label" name={name} value={value} onChange={handleChange} label="Blood Product Type">
            <MenuItem value={"Whole"}>Whole</MenuItem>
            <MenuItem value={"Plasma"}>Plasma</MenuItem>
            <MenuItem value={"Platelet"}>Platelet</MenuItem>
        </Select>
    </FormControl>
  );
};

export default BloodProduct;