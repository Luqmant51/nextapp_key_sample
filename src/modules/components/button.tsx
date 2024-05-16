import React from 'react';
import './css/button.css';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size: 'small' | 'medium' | 'large';
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const DevButton: React.FC<ButtonProps> = ({ variant = 'contained', color = 'primary', size = 'medium', label, onClick, ...props }) => {
    return (
        <MuiButton style={{ margin: "10px" }} variant={variant} color={color} size={size} onClick={onClick} {...props}>
            {label}
        </MuiButton>
    );
};
