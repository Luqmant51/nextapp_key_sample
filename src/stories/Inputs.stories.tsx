
import NewTextField from "@/modules/components/inputfiled";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof NewTextField> = {
    title: 'Components/Input',
    component: NewTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

const variants: ('outlined' | 'filled' | 'standard')[] = ['outlined', 'filled', 'standard'];
export const TextFieldStory: StoryObj<typeof NewTextField> = {
    render: () => (
        <div>
            {variants.map((field, index) => (
                <div key={index} style={{ margin: '10px 0' }}>
                    <NewTextField label={field} variant={field} />
                </div>
            ))}
        </div>
    ),
};
