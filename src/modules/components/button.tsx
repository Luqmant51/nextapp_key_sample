import React from 'react';
import './css/button.css';
import { Button as MuiButton } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface ButtonProps {
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size: 'small' | 'medium' | 'large';
    label: string;
    disabled?: boolean;
    sx?: SxProps<Theme>;
    onClick?: (...agrs: any) => any;
}

export const DevButton: React.FC<ButtonProps> = ({ variant = 'contained', color = 'primary', size = 'medium', label, onClick, ...props }) => {
  return (
    <MuiButton style={{ minWidth: '150px', margin:'5px' }} variant={variant} color={color} size={size} onClick={onClick} {...props}>
      {label}
    </MuiButton>
  );
};
