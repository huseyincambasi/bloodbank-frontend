import { Box, TextField, useMediaQuery } from '@mui/material'
import { useState, useEffect } from 'react';

import BloodGroup from "components/BloodGroup";
import BloodProduct from "components/BloodProduct";

const BloodRequest = (props) => {
    const [productType, setProductType] = useState("");
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

    const handleChange = (e) => {
        props.inputsChange((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        console.log(e.target.value);
      };
    

      const handleChange2 = (e) => {
        props.inputsChange((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        setProductType(e.target.value);
        //console.log('sasd');
        console.log(productType);

      };

    return (
        
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" } }}>
           { !props.disabled && <TextField disabled={props.disabled} required name="name" value={props.inputs.name} onChange={handleChange} label="Name" sx={{ gridColumn: "span 2" }} /> }
           { !props.disabled && <TextField disabled={props.disabled} required name="surname" value={props.inputs.surname} onChange={handleChange} label="Surname" sx={{ gridColumn: "span 2" }}/> }
            <TextField disabled={props.disabled} required name="city" value={props.inputs.city} onChange={handleChange} label="City"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="district" value={props.inputs.district} onChange={handleChange} label="District"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="phone" value={props.inputs.phone} onChange={handleChange} label="Phone" sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="email" value={props.inputs.email} onChange={handleChange} label="Email" type="email" sx={{ gridColumn: "span 2" }}/>                
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodGroup disabled={props.disabled} name="blood_group" value={props.inputs.blood_group} handleChange={handleChange} required={true} sx={{ gridColumn: "span 4" }}/>  
            </Box>
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodProduct  disabled={props.disabled} name="blood_product_type" value={props.inputs.blood_product_type} handleChange={handleChange2} required={true} sx={{ gridColumn: "span 4" }}/> 
            </Box>
            <TextField disabled={props.disabled} required name="unit" value={props.inputs.unit} onChange={handleChange} label="Number of Units" sx={{ gridColumn: "span 2" }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            { (productType==='Whole' || props.inputs.blood_product_type==='Whole') && <TextField disabled={props.disabled} required name="whole1" value={props.inputs.whole1} onChange={handleChange} label="Field Whole 1" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Whole' || props.inputs.blood_product_type==='Whole')  &&<TextField disabled={props.disabled} required name="whole2" value={props.inputs.whole2} onChange={handleChange} label="Field Whole 2" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Whole' || props.inputs.blood_product_type==='Whole')  &&<TextField disabled={props.disabled} required name="whole3" value={props.inputs.whole3} onChange={handleChange} label="Field Whole 3" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Plasma' || props.inputs.blood_product_type==='Plasma')&&<TextField disabled={props.disabled} required name="plasma1" value={props.inputs.plasma1} onChange={handleChange} label="Field Plasma 1" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Plasma'|| props.inputs.blood_product_type==='Plasma') &&<TextField disabled={props.disabled} required name="plasma2" value={props.inputs.plasma2} onChange={handleChange} label="Field Plasma 2" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Plasma' || props.inputs.blood_product_type==='Plasma')&&<TextField disabled={props.disabled} required name="plasma3" value={props.inputs.plasma3} onChange={handleChange} label="Field Plasma 3" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Platelet' || props.inputs.blood_product_type==='Platelet')&&<TextField disabled={props.disabled} required name="platelet1" value={props.inputs.platelet1} onChange={handleChange} label="Field Platelet 1" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Platelet'|| props.inputs.blood_product_type==='Platelet') &&<TextField disabled={props.disabled} required name="platelet2" value={props.inputs.platelet2} onChange={handleChange} label="Field Platelet 2" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Platelet'|| props.inputs.blood_product_type==='Platelet') &&<TextField disabled={props.disabled} required name="platelet3" value={props.inputs.platelet3} onChange={handleChange} label="Field Platelet 3" sx={{ gridColumn: "span 2" }} /> }

        </Box>
    )
}

export default BloodRequest;