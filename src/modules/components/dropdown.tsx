import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectOtherPropsProps {
    options: string[];
    selectedOption: string;
    disabled?: boolean;
    error?: boolean;
    readOnly?: boolean;
    required?: boolean;
    title: string;
    helperText: string;
}

export default function SelectOtherProps({
    options,
    selectedOption,
    disabled,
    error,
    readOnly,
    required,
    title,
    helperText,
}: SelectOtherPropsProps) {
    const [age, setAge] = React.useState(selectedOption);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl
            sx={{ m: 1, minWidth: 120 }}
            disabled={disabled}
            error={error}
            required={required}
        >
            <InputLabel id="select-label">{title}</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={age}
                label={title}
                onChange={handleChange}
                inputProps={{ readOnly }}
            >
                {options.map((option: any, index: any) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}
