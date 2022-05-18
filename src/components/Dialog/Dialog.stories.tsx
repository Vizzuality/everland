import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Dialog, DialogProps } from './Dialog'
import { Text } from 'components/Text'
import { booleanControl, childrenControl } from 'utils/storybook'
import { Spacer } from 'components/Spacer'

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
  argTypes: {
    defaultOpen: booleanControl(false),
    trigger: childrenControl(),
    children: childrenControl(),
  },
} as Meta

const Template: Story<DialogProps> = (args) => (
  <Dialog {...args} trigger={<button>Open me</button>}>
    <Text size="h2">This is a title</Text>

    <Spacer direction="column" space="6" />

    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cum eos debitis voluptate
      doloribus, ipsa atque temporibus aliquid iure excepturi! Magni beatae, possimus aspernatur
      consequatur delectus repudiandae quaerat cumque doloremque?
    </Text>

    <Spacer direction="column" space="6" />

    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cum eos debitis voluptate
      doloribus, ipsa atque temporibus aliquid iure excepturi! Magni beatae, possimus aspernatur
      consequatur delectus repudiandae quaerat cumque doloremque?
    </Text>
  </Dialog>
)

export const Default = Template.bind({})
Default.args = {}

export const WithLongContent: Story<DialogProps> = (args) => (
  <Dialog {...args} trigger={<button>Open me</button>}>
    <Text size="h2">This is a title</Text>

    <Spacer direction="column" space="6" />

    {Array(15)
      .fill('_')
      .map((_, index) => (
        <Text key={index}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cum eos debitis voluptate
          doloribus, ipsa atque temporibus aliquid iure excepturi! Magni beatae, possimus aspernatur
          consequatur delectus repudiandae quaerat cumque doloremque?
        </Text>
      ))}
  </Dialog>
)
WithLongContent.args = {}
