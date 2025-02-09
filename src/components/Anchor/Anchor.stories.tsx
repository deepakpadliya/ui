import Anchor from "./Anchor";

export default {
  title:"components/Anchor",
  component: Anchor,
  parameters:{},
  tags:['autodocs'],
  argTypes:{
    href:{
      control: 'text'
    },
    label:{
      control: 'text'
    }
  },
  args:{}
}

export const Demo = {
  args:{
    href: 'https://www.google.com',
    label: 'Google'
  }
}