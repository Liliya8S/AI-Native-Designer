import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon, ICON_NAMES } from '../components/Icon'

/**
 * Витрина всех токенов дизайн-системы (Primitive + Semantic из
 * `ds/foundation.md`) и полного набора иконок (Unicons, `ds/CONTRACT.md`).
 * Ничего не хардкодится — значения читаются из `src/tokens/*.css` через
 * `var(--token)`, один в один с Figma.
 */
const meta = {
  title: 'Foundation/Tokens',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const primitiveColors = [
  'accent-100',
  'accent-300',
  'accent-500',
  'accent-700',
  'accent-900',
  'gray-00',
  'gray-50',
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-500',
  'gray-700',
  'gray-900',
  'gray-950',
  'success-500',
  'warning-500',
  'error-500',
  'info-500',
  'category-red-500',
  'category-blue-500',
  'scrim-20',
  'scrim-40',
  'scrim-60',
  'success-a12',
  'warning-a12',
  'error-a12',
  'info-a12',
  'category-red-a12',
  'category-blue-a12',
]

const semanticColors = [
  'surface-default',
  'surface-subtle',
  'surface-action-primary',
  'surface-action-primary-hover',
  'surface-inverse',
  'surface-well',
  'text-default',
  'text-muted',
  'text-on-action',
  'text-error',
  'text-success',
  'border-default',
  'border-strong',
  'border-error',
  'border-focus-ring',
  'border-decorative',
  'bg-success',
  'bg-warning',
  'bg-error',
  'bg-info',
  'bg-success-subtle',
  'bg-warning-subtle',
  'bg-error-subtle',
  'bg-info-subtle',
  'bg-category-red',
  'bg-category-red-subtle',
  'text-category-red',
  'bg-category-blue',
  'bg-category-blue-subtle',
  'text-category-blue',
  'overlay-scrim',
]

const radii = ['none', 'sm', 'md', 'md-lg', 'lg', 'xl']
const spacing = [1, 2, 3, 4, 6, 8, 12, 16]

function ColorGrid({ names }: { names: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
      {names.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span
            style={{
              height: 56,
              borderRadius: 'var(--radius-md)',
              background: `var(--${name})`,
              boxShadow: 'inset 0 0 0 1px var(--border-default)',
            }}
          />
          <span className="ds-body-xs" style={{ color: 'var(--text-muted)', wordBreak: 'break-all' }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Все Primitive-цвета: акцент, серая шкала, функциональные, альфа-подложки. */
export const PrimitiveColors: Story = {
  render: () => <ColorGrid names={primitiveColors} />,
}

/** Все Semantic-цвета — каждый ссылается на Primitive (см. src/tokens/semantics.css). */
export const SemanticColors: Story = {
  render: () => <ColorGrid names={semanticColors} />,
}

/** Шкала типографики — весь набор DS/Heading, DS/Body, DS/Label стилей. */
export const Typography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p className="ds-heading-4xl" style={{ margin: 0 }}>
        4xl 48 — Пример текста
      </p>
      <p className="ds-heading-3xl" style={{ margin: 0 }}>
        3xl 32 — Пример текста
      </p>
      <p className="ds-heading-2xl" style={{ margin: 0 }}>
        2xl 24 — Пример текста
      </p>
      <p className="ds-heading-xl" style={{ margin: 0 }}>
        xl 20 — Пример текста
      </p>
      <p className="ds-heading-lg" style={{ margin: 0 }}>
        lg 18 — Пример текста
      </p>
      <p className="ds-body-base" style={{ margin: 0 }}>
        base 16 — Пример текста
      </p>
      <p className="ds-body-sm" style={{ margin: 0 }}>
        sm 14 — Пример текста
      </p>
      <p className="ds-body-sm-medium" style={{ margin: 0 }}>
        sm Medium 14 — Пример текста
      </p>
      <p className="ds-body-xs" style={{ margin: 0 }}>
        xs 12 — Пример текста
      </p>
      <p className="ds-label-xs" style={{ margin: 0 }}>
        Label xs 12 — Пример текста
      </p>
    </div>
  ),
}

/** Радиусы скругления — none/sm/md/md-lg/lg/xl. */
export const Radii: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {radii.map((r) => (
        <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: `var(--radius-${r})`,
              background: 'var(--surface-action-primary)',
            }}
          />
          <span className="ds-body-xs" style={{ color: 'var(--text-muted)' }}>
            {r}
          </span>
        </div>
      ))}
    </div>
  ),
}

/** Шкала отступов — space-1 … space-16. */
export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {spacing.map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: `var(--space-${s})`,
              height: 12,
              background: 'var(--surface-action-primary)',
              borderRadius: 2,
              flex: 'none',
            }}
          />
          <span className="ds-body-xs" style={{ color: 'var(--text-muted)' }}>
            space-{s} · {s === 1 ? 4 : s === 2 ? 8 : s === 3 ? 12 : s === 4 ? 16 : s === 6 ? 24 : s === 8 ? 32 : s === 12 ? 48 : 64}
            px
          </span>
        </div>
      ))}
    </div>
  ),
}

/** Полный набор иконок — Unicons (Line), скопированы во фрейм «Line» в Figma. */
export const Icons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 20 }}>
      {ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface-well)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-default)',
            }}
          >
            <Icon name={name} size={22} />
          </span>
          <span className="ds-body-xs" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}
