import { Box, TextField, useMediaQuery } from '@mui/material'
import BloodGroup from "components/BloodGroup";
import BloodProduct from "components/BloodProduct";

const BloodRequest = (props) => {
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

    const handleChange = (e) => {
        props.inputsChange((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
      };

    return (
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" } }}>
            <TextField disabled={props.disabled} required name="name" value={props.inputs.name} onChange={handleChange} label="Name" sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="surname" value={props.inputs.surname} onChange={handleChange} label="Surname" sx={{ gridColumn: "span 2" }}/>
            <TextField disabled={props.disabled} required name="city" value={props.inputs.city} onChange={handleChange} label="City"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="district" value={props.inputs.district} onChange={handleChange} label="District"  sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="phone" value={props.inputs.phone} onChange={handleChange} label="Phone" sx={{ gridColumn: "span 2" }} />
            <TextField disabled={props.disabled} required name="email" value={props.inputs.email} onChange={handleChange} label="Email" type="email" sx={{ gridColumn: "span 2" }}/>                
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodGroup disabled={props.disabled} name="blood_group" value={props.inputs.blood_group} handleChange={handleChange} required={true} sx={{ gridColumn: "span 4" }}/>  
            </Box>
            <Box sx={{ gridColumn: "span 2" }}>
                <BloodProduct disabled={props.disabled} name="blood_product_type" value={props.inputs.blood_product_type} handleChange={handleChange} required={true} sx={{ gridColumn: "span 4" }}/> 
            </Box>
            <TextField disabled={props.disabled} required name="unit" value={props.inputs.unit} onChange={handleChange} label="Number of Units" sx={{ gridColumn: "span 2" }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </Box>
    )
}

export default BloodRequest;