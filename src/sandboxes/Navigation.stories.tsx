import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar } from '../components/Navbar'
import { Tabs } from '../components/Tabs'
import { TabBarItem } from '../components/TabBarItem'

/**
 * Каркас экрана: Navbar сверху + Tabs для переключения раздела + TabBarItem
 * снизу для переключения между разделами приложения. Обе навигации живые —
 * клик реально меняет активный пункт.
 */
const meta = {
  title: 'Sandboxes/Навигация',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const SECTIONS = ['Билеты', 'История', 'Избранное']
const TABS: { label: string; icon: 'home' | 'clipboard-notes' | 'calendar-alt' | 'user' }[] = [
  { label: 'Главная', icon: 'home' },
  { label: 'Билеты', icon: 'clipboard-notes' },
  { label: 'Занятия', icon: 'calendar-alt' },
  { label: 'Профиль', icon: 'user' },
]

function ScreenShellDemo() {
  const [tab, setTab] = useState(0)
  const [section, setSection] = useState(0)

  return (
    <div
      style={{
        width: 375,
        margin: '0 auto',
        background: 'var(--surface-subtle)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 480,
      }}
    >
      <Navbar title="ПДД Ассистент" />
      <div style={{ padding: 'var(--space-4)' }}>
        <Tabs items={SECTIONS} activeIndex={section} onChange={setSection} />
        <p className="ds-body-sm" style={{ marginTop: 16, color: 'var(--text-muted)' }}>
          Раздел: {SECTIONS[section]}
        </p>
      </div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: 'var(--space-3) 0',
          boxShadow: 'inset 0 1px 0 var(--border-default)',
          background: 'var(--surface-default)',
        }}
      >
        {TABS.map((t, i) => (
          <TabBarItem key={t.label} label={t.label} icon={t.icon} active={i === tab} onClick={() => setTab(i)} />
        ))}
      </div>
    </div>
  )
}

export const ScreenShell: Story = {
  render: () => <ScreenShellDemo />,
}
