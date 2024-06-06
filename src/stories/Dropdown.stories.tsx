import SelectOtherProps from '@/modules/components/dropdown'; 
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/SelectOtherProps',
    component: SelectOtherProps,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SelectOtherProps>;

export default meta;

export const DropDown: StoryObj<typeof SelectOtherProps> = {
    render: () => {
        const configs = [
            {
                options: ['None', 'Ten', 'Twenty', 'Thirty'],
                title: 'Age',
                helperText: 'Default',
                selectedOption: 'None',
            },
            {
                options: ['None', 'Red', 'Blue', 'Green'],
                title: 'Color',
                helperText: 'Choose a color',
                disabled: true,
                selectedOption: 'None',
            },
            {
                options: ['None', 'Cat', 'Dog', 'Bird'],
                title: 'Pet',
                helperText: 'Choose a pet',
                error: true,
                selectedOption: 'None',
            },
            {
                options: ['None', 'Apple', 'Banana', 'Cherry'],
                title: 'Fruit',
                helperText: 'Choose a fruit',
                readOnly: true,
                selectedOption: 'None',
            },
            {
                options: ['None', 'Soccer', 'Basketball', 'Baseball'],
                title: 'Sport',
                helperText: 'Choose a sport',
                required: true,
                selectedOption: 'None',
            },
        ];

        return (
            <>
                {configs.map((config, index) => (
                    <SelectOtherProps
                        key={index}
                        options={config.options}
                        selectedOption={config.selectedOption}
                        title={config.title}
                        helperText={config.helperText}
                        disabled={config.disabled}
                        error={config.error}
                        readOnly={config.readOnly}
                        required={config.required}
                    />
                ))}
            </>
        );
    },
};
