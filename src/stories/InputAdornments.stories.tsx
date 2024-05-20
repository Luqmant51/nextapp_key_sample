import InputAdornments, { CustomInputProps } from "@/modules/components/inputAdornments";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/InputAdornments',
    component: InputAdornments,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InputAdornments>;

export default meta;

export const InputAdornmentComponent: StoryObj<typeof InputAdornments> = {
    render: (args) => {
        const inputConfigs: CustomInputProps[] = [
            { variant: 'outlined', label: 'With normal TextField', id: 'outlined-start-adornment', startAdornment: 'kg' },
            { variant: 'outlined', label: 'Weight', id: 'outlined-adornment-weight', endAdornment: 'kg', helperText: 'Weight' },
            { variant: 'outlined', label: 'Password', id: 'outlined-adornment-password', endAdornment: 'password' },
            { variant: 'outlined', label: 'Amount', id: 'outlined-adornment-amount', startAdornment: '$', fullWidth: true },
            { variant: 'filled', label: 'With normal TextField', id: 'filled-start-adornment', startAdornment: 'kg' },
            { variant: 'filled', label: 'Weight', id: 'filled-adornment-weight', endAdornment: 'kg', helperText: 'Weight' },
            { variant: 'filled', label: 'Password', id: 'filled-adornment-password', endAdornment: 'password' },
            { variant: 'filled', label: 'Amount', id: 'filled-adornment-amount', startAdornment: '$', fullWidth: true },
            { variant: 'standard', label: 'With normal TextField', id: 'standard-start-adornment', startAdornment: 'kg' },
            { variant: 'standard', label: 'Weight', id: 'standard-adornment-weight', endAdornment: 'kg', helperText: 'Weight' },
            { variant: 'standard', label: 'Password', id: 'standard-adornment-password', endAdornment: 'password' },
            { variant: 'standard', label: 'Amount', id: 'standard-adornment-amount', startAdornment: '$', fullWidth: true },
        ];

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {inputConfigs.map((config) => (
                    <div key={config.id} style={{ flex: '1 0 30%', boxSizing: 'border-box', padding: '10px', border:'1px solid black' }}>
                        <InputAdornments key={config.id} {...config} />
                    </div>
                ))}
            </div>
        );
    },
};
