import type { Meta, StoryObj } from '@storybook/react';
import { DevButton } from '@/modules/components/button';

const meta: Meta<typeof DevButton> = {
  title: 'Components/DevButton',
  component: DevButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
    color: { control: 'select', options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const AllButtonsSmall: StoryObj<typeof DevButton> = {
  render: (args) => {
    const variants: ('text' | 'outlined' | 'contained')[] = ['contained', 'outlined', 'text'];
    const colors: ('primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit')[] = [
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
      'inherit'
    ];

    return (
      <div style={{ display: 'flex' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
            {colors.map((color) => (
              <DevButton key={color} {...args} variant={variant} color={color} size="small" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} />
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
          {colors.map((color) => (
            <DevButton key={color} {...args} variant="contained" color={color} size="small" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} disabled />
          ))}
        </div>
      </div>
    );
  },
};

export const AllButtonsMedium: StoryObj<typeof DevButton> = {
  render: (args) => {
    const variants: ('text' | 'outlined' | 'contained')[] = ['contained', 'outlined', 'text'];
    const colors: ('primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit')[] = [
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
      'inherit'
    ];

    return (
      <div style={{ display: 'flex' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
            {colors.map((color) => (
              <DevButton key={color} {...args} variant={variant} color={color} size="medium" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} />
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
          {colors.map((color) => (
            <DevButton key={color} {...args} variant="contained" color={color} size="medium" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} disabled />
          ))}
        </div>
      </div>
    );
  },
};

export const AllButtonsLarge: StoryObj<typeof DevButton> = {
  render: (args) => {
    const variants: ('text' | 'outlined' | 'contained')[] = ['contained', 'outlined', 'text'];
    const colors: ('primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit')[] = [
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
      'inherit'
    ];

    return (
      <div style={{ display: 'flex' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
            {colors.map((color) => (
              <DevButton key={color} {...args} variant={variant} color={color} size="large" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} />
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', margin: '10px', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '5px' }}>
          {colors.map((color) => (
            <DevButton key={color} {...args} variant="contained" color={color} size="large" label={`${color.charAt(0).toUpperCase() + color.slice(1)} Button`} disabled />
          ))}
        </div>
      </div>
    );
  },
};