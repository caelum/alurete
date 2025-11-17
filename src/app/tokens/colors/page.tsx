'use client';

import styles from './colors.module.css';

export default function ColorsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Color Tokens</h1>
        <p className={styles.description}>
          Todos os tokens de cor semânticos do design system com suporte a tema claro e escuro.
        </p>
      </div>

      {/* Brand */}
      <section className={styles.section}>
        <h2>Brand</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-brand-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Default</strong>
              <code>--color-brand-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-brand-subtle)' }} />
            <div className={styles.colorInfo}>
              <strong>Subtle</strong>
              <code>--color-brand-subtle</code>
            </div>
          </div>
        </div>
      </section>

      {/* Border */}
      <section className={styles.section}>
        <h2>Border</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-border-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Default</strong>
              <code>--color-border-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-border-subtle)' }} />
            <div className={styles.colorInfo}>
              <strong>Subtle</strong>
              <code>--color-border-subtle</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-border-strong)' }} />
            <div className={styles.colorInfo}>
              <strong>Strong</strong>
              <code>--color-border-strong</code>
            </div>
          </div>
        </div>
      </section>

      {/* Icon */}
      <section className={styles.section}>
        <h2>Icon</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-icon-primary)' }} />
            <div className={styles.colorInfo}>
              <strong>Primary</strong>
              <code>--color-icon-primary</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-icon-secondary)' }} />
            <div className={styles.colorInfo}>
              <strong>Secondary</strong>
              <code>--color-icon-secondary</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-icon-on-brand)' }} />
            <div className={styles.colorInfo}>
              <strong>On Brand</strong>
              <code>--color-icon-on-brand</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-icon-interactive)' }} />
            <div className={styles.colorInfo}>
              <strong>Interactive</strong>
              <code>--color-icon-interactive</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Primary */}
      <section className={styles.section}>
        <h2>Interactive - Primary</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-primary-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Default</strong>
              <code>--color-interactive-primary-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-primary-hover)' }} />
            <div className={styles.colorInfo}>
              <strong>Hover</strong>
              <code>--color-interactive-primary-hover</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-primary-focus)' }} />
            <div className={styles.colorInfo}>
              <strong>Focus</strong>
              <code>--color-interactive-primary-focus</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-primary-pressed)' }} />
            <div className={styles.colorInfo}>
              <strong>Pressed</strong>
              <code>--color-interactive-primary-pressed</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-primary-disabled)' }} />
            <div className={styles.colorInfo}>
              <strong>Disabled</strong>
              <code>--color-interactive-primary-disabled</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Secondary */}
      <section className={styles.section}>
        <h2>Interactive - Secondary</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-secondary-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Default</strong>
              <code>--color-interactive-secondary-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-secondary-hover)' }} />
            <div className={styles.colorInfo}>
              <strong>Hover</strong>
              <code>--color-interactive-secondary-hover</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-secondary-focus)' }} />
            <div className={styles.colorInfo}>
              <strong>Focus</strong>
              <code>--color-interactive-secondary-focus</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-secondary-pressed)' }} />
            <div className={styles.colorInfo}>
              <strong>Pressed</strong>
              <code>--color-interactive-secondary-pressed</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-interactive-secondary-disabled)' }} />
            <div className={styles.colorInfo}>
              <strong>Disabled</strong>
              <code>--color-interactive-secondary-disabled</code>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className={styles.section}>
        <h2>Feedback</h2>
        <div className={styles.colorGrid}>
          {/* Success */}
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-success-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Success Default</strong>
              <code>--color-feedback-success-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-success-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Success Surface</strong>
              <code>--color-feedback-success-surface</code>
            </div>
          </div>
          {/* Error */}
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-error-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Error Default</strong>
              <code>--color-feedback-error-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-error-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Error Surface</strong>
              <code>--color-feedback-error-surface</code>
            </div>
          </div>
          {/* Warning */}
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-warning-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Warning Default</strong>
              <code>--color-feedback-warning-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-warning-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Warning Surface</strong>
              <code>--color-feedback-warning-surface</code>
            </div>
          </div>
          {/* Info */}
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-info-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Info Default</strong>
              <code>--color-feedback-info-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-feedback-info-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Info Surface</strong>
              <code>--color-feedback-info-surface</code>
            </div>
          </div>
        </div>
      </section>

      {/* Surface */}
      <section className={styles.section}>
        <h2>Surface</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-surface-primary)' }} />
            <div className={styles.colorInfo}>
              <strong>Primary</strong>
              <code>--color-surface-primary</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-surface-secondary)' }} />
            <div className={styles.colorInfo}>
              <strong>Secondary</strong>
              <code>--color-surface-secondary</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-surface-subtle)' }} />
            <div className={styles.colorInfo}>
              <strong>Subtle</strong>
              <code>--color-surface-subtle</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-surface-brand)' }} />
            <div className={styles.colorInfo}>
              <strong>Brand</strong>
              <code>--color-surface-brand</code>
            </div>
          </div>
        </div>
      </section>

      {/* Text */}
      <section className={styles.section}>
        <h2>Text</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-text-title)' }} />
            <div className={styles.colorInfo}>
              <strong>Title</strong>
              <code>--color-text-title</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-text-body)' }} />
            <div className={styles.colorInfo}>
              <strong>Body</strong>
              <code>--color-text-body</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-text-subtle)' }} />
            <div className={styles.colorInfo}>
              <strong>Subtle</strong>
              <code>--color-text-subtle</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-text-on-brand)' }} />
            <div className={styles.colorInfo}>
              <strong>On Brand</strong>
              <code>--color-text-on-brand</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-text-disabled)' }} />
            <div className={styles.colorInfo}>
              <strong>Disabled</strong>
              <code>--color-text-disabled</code>
            </div>
          </div>
        </div>
      </section>

      {/* Button Secondary */}
      <section className={styles.section}>
        <h2>Button Secondary</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-button-secondary-default)' }} />
            <div className={styles.colorInfo}>
              <strong>Default</strong>
              <code>--color-button-secondary-default</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-button-secondary-hover)' }} />
            <div className={styles.colorInfo}>
              <strong>Hover</strong>
              <code>--color-button-secondary-hover</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--color-button-secondary-hover-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Hover Surface</strong>
              <code>--color-button-secondary-hover-surface</code>
            </div>
          </div>
        </div>
      </section>

      {/* Card */}
      <section className={styles.section}>
        <h2>Card</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--card-surface)' }} />
            <div className={styles.colorInfo}>
              <strong>Surface</strong>
              <code>--card-surface</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--card-secondary)' }} />
            <div className={styles.colorInfo}>
              <strong>Secondary</strong>
              <code>--card-secondary</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
