import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input, { InputProps } from '@mui/material/Input';
import FilledInput, { FilledInputProps } from '@mui/material/FilledInput';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export type CustomInputProps = {
    variant: 'outlined' | 'filled' | 'standard';
    label: string;
    id: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    helperText?: string;
    fullWidth?: boolean;
    type?: string;
    inputProps?: InputProps | FilledInputProps | OutlinedInputProps;
};

const CustomInput: React.FC<CustomInputProps> = ({
    variant,
    label,
    id,
    startAdornment,
    endAdornment,
    helperText,
    fullWidth = false,
    type = 'text',
    inputProps,
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const commonProps = {
        id,
        startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null,
        endAdornment: endAdornment ? (
            <InputAdornment position="end">
                {endAdornment === 'password' ? (
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                ) : (
                    endAdornment
                )}
            </InputAdornment>
        ) : null,
        type: endAdornment === 'password' && !showPassword ? 'password' : type,
        ...inputProps,
    };

    const InputComponent = {
        standard: (props: InputProps) => <Input {...props} />,
        filled: (props: FilledInputProps) => <FilledInput {...props} />,
        outlined: (props: OutlinedInputProps) => <OutlinedInput {...props} />,
    }[variant];

    return (
        <FormControl variant={variant} sx={{ m: 1, width: fullWidth ? '100%' : '25ch' }}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputComponent {...commonProps} />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};



export default function InputAdornments({ variant = 'outlined', label = '', ...props }: CustomInputProps) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <CustomInput variant={variant} label={label} {...props} />
        </Box>
    );
}
