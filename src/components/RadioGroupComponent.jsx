import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const RadioGroupComponent = ({ label, name, value = '', handleChange, required = false, disabled = false, firstValue, firstLabel, secondValue, secondLabel }) => {
  return (
    <FormControl>
        <FormLabel id="yes_no_label">
            {label}
        </FormLabel>
        <RadioGroup row aria-labelledby="yes_no_label" name={name} value={value} onChange={handleChange}>
            <FormControlLabel required={required} disabled={disabled} value={firstValue} control={<Radio />} label={firstLabel} />
            <FormControlLabel required={required} disabled={disabled} value={secondValue} control={<Radio />} label={secondLabel} />
        </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;