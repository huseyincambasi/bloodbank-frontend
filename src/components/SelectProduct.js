import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { changePage } from './actions';
import { connect } from 'react-redux';
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Box } from '@mui/material';
import { Whole } from './Whole';
const SelectProduct = (props) => {
  
  const [input, setInput] = useState("Whole");

  const handleChange = (e) => {
    setInput(e.target.value);
    
  };
  
  const navigate = useNavigate();
  
  const handleClick = () =>{
    if (input=="Whole"){
      props.changePage(<Whole/>)
    }
    else{
      props.changePage(input)
    }
   
    navigate('/bloodrequest', {replace: true})
  };



  return (
    <Box sx={{ mt:5, minWidth: 120 }}>
      <Button variant="contained" onClick={handleClick}> New Blood Request</Button>
      <FormControl sx={{mt:5}} fullWidth>
        <InputLabel id="demo-simple-select-label">Input</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input}
          label="Input"
          onChange={handleChange}
        >
          <MenuItem  value={"Whole"}>Whole</MenuItem>
          <MenuItem   value={"Plazma"}>Plazma</MenuItem>
          <MenuItem   value={"asd"}>asd</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );


}

const mapDispatchToProps = {
  changePage
}

export default connect(null, mapDispatchToProps)(SelectProduct)

