import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

interface InputProps {
    label: string;
    variant: 'outlined' | 'filled' | 'standard';
    type?: string;
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    InputProps?: any;
}

const NewTextField: React.FC<InputProps> = ({ label = "Text Field", variant = 'outlined', ...props }) => {
    return <StyledTextField label={label} variant={variant} {...props} />;
};

export default NewTextField;
