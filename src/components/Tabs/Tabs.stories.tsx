import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

/** Переключение между разделами на одном экране (State=active/inactive). */
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: { items: ['Билеты', 'История'], activeIndex: 0 },
  argTypes: {
    items: { control: 'object' },
    activeIndex: { control: 'number' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** Живое переключение вкладок кликом. */
export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [active, setActive] = useState(0)
      return <Tabs items={['Билеты', 'История', 'Избранное']} activeIndex={active} onChange={setActive} />
    }
    return <Demo />
  },
}

export const AllVariants: Story = { args: { items: ['Билеты', 'История'], activeIndex: 0 } }
