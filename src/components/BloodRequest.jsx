import { Box, TextField, useMediaQuery } from '@mui/material'
import { useState } from 'react';
import BloodGroup from "components/BloodGroup";
import BloodProduct from "components/BloodProduct";
import RadioGroupComponent from 'components/RadioGroupComponent';

const BloodRequest = (props) => {
    const [productType, setProductType] = useState("");
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

    const handleChange = (e) => {
        props.inputsChange((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
      };
    

      const handleChange2 = (e) => {
        props.inputsChange((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        setProductType(e.target.value);

      };

    return (
        
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" } }}>
           { !props.disabled && <TextField disabled={props.disabled} required name="name" value={props.inputs.name} onChange={handleChange} label="Patient Name" sx={{ gridColumn: "span 2" }} /> }
           { !props.disabled && <TextField disabled={props.disabled} required name="surname" value={props.inputs.surname} onChange={handleChange} label="Patient Surname" sx={{ gridColumn: "span 2" }}/> }
            <TextField disabled={props.disabled} required name="city" value={props.inputs.city} onChange={handleChange} label="City"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="district" value={props.inputs.district} onChange={handleChange} label="District"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="phone" value={props.inputs.phone} onChange={handleChange} label="Phone" sx={{ gridColumn: "span 2" }} />
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodGroup disabled={props.disabled} name="blood_group" value={props.inputs.blood_group} handleChange={handleChange} required={true} sx={{ gridColumn: "span 4" }}/>  
            </Box>
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodProduct  disabled={props.disabled} name="blood_product_type" value={props.inputs.blood_product_type} handleChange={handleChange2} required={true} sx={{ gridColumn: "span 4" }}/> 
            </Box>
            <TextField disabled={props.disabled} required name="unit" value={props.inputs.unit} onChange={handleChange} label="Number of Units" sx={{ gridColumn: "span 2" }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            { (productType==='Whole' || props.inputs.blood_product_type==='Whole') && <TextField disabled={props.disabled} required name="indication" value={props.inputs.indication} onChange={handleChange} label="Indication" sx={{ gridColumn: "span 2" }} /> }
            { (productType==='Plasma'|| props.inputs.blood_product_type==='Plasma') && (
                <>
                    <Box sx={{ gridColumn: "span 2" }}>
                        <RadioGroupComponent disabled={props.disabled} required name="anti_coagulants" value={props.inputs.anti_coagulants} handleChange={handleChange} label="Is the patient on any AntiCoagulants?" firstValue="no" firstLabel="No" secondValue="yes" secondLabel="Yes" sx={{ gridColumn: "span 2" }}/>  
                    </Box>
                    <Box sx={{ gridColumn: "span 2" }}>
                        <RadioGroupComponent disabled={props.disabled} required name="coagulation_factor_deficiency" value={props.inputs.coagulation_factor_deficiency} handleChange={handleChange} label="Does this patient have a specific coagulation factor deficiency?" firstValue="no" firstLabel="No" secondValue="yes" secondLabel="Yes" sx={{ gridColumn: "span 2" }}/>  
                    </Box>
                </>
            )}
            { (productType==='Platelet'|| props.inputs.blood_product_type==='Platelet') && (
                <>
                    <TextField disabled={props.disabled} required name="current_platelet_count" value={props.inputs.current_platelet_count} onChange={handleChange} label="Current Platelet Count x 1000/uL" sx={{ gridColumn: "span 2" }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    <Box sx={{ gridColumn: "span 2" }}>
                        <RadioGroupComponent disabled={props.disabled} required name="active_bleeding" value={props.inputs.active_bleeding} handleChange={handleChange} label="Active Bleeding" firstValue="no" firstLabel="No" secondValue="yes" secondLabel="Yes" sx={{ gridColumn: "span 2" }}/>  
                    </Box>
                    <Box sx={{ gridColumn: "span 2" }}>
                        <RadioGroupComponent disabled={props.disabled} required name="request_type" value={props.inputs.request_type} handleChange={handleChange} label="Request Type" firstValue="stat" firstLabel="Stat" secondValue="routine" secondLabel="Routine" sx={{ gridColumn: "span 2" }}/>  
                    </Box>
                </>
            )}
        </Box>
    )
}

export default BloodRequest;