//import { withDesign } from 'storybook-addon-designs';
import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
 // decorators: [withDesign],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Example = {
  render: () => ({
    components: { MyButton },
    template: '<MyButton />',
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rHhDUF8gYoXoUppFtyJ0Mu/Product-Page?type=design&node-id=2209%3A31836&mode=design&t=kVcSMuaEsciOcQKi-1',
    },
  },
};