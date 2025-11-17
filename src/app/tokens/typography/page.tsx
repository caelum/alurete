'use client';

import styles from './typography.module.css';

export default function TypographyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Typography</h1>
        <p className={styles.description}>
          Sistema tipográfico completo com diferentes famílias de fontes, tamanhos e pesos.
        </p>
      </div>

      {/* Font Families */}
      <section className={styles.section}>
        <h2>Font Families</h2>
        <div className={styles.fontStack}>
          <div className={styles.fontCard}>
            <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-2xl)' }}>
              Open Sans
            </p>
            <code>--font-family-sans</code>
            <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)' }}>
              Tipografia padrão para corpo de texto e interfaces.
            </p>
          </div>
          <div className={styles.fontCard}>
            <p style={{ fontFamily: 'var(--font-family-brand)', fontSize: 'var(--font-size-2xl)' }}>
              Chakra Petch
            </p>
            <code>--font-family-brand</code>
            <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)' }}>
              Fonte de marca para títulos e elementos destacados.
            </p>
          </div>
          <div className={styles.fontCard}>
            <p style={{ fontFamily: 'var(--font-family-serif)', fontSize: 'var(--font-size-2xl)' }}>
              PT Serif
            </p>
            <code>--font-family-serif</code>
            <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)' }}>
              Fonte serifada para conteúdo editorial.
            </p>
          </div>
          <div className={styles.fontCard}>
            <p style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-xl)' }}>
              Fira Code
            </p>
            <code>--font-family-mono</code>
            <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)' }}>
              Fonte monoespaçada para código e dados técnicos.
            </p>
          </div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className={styles.section}>
        <h2>Font Sizes</h2>
        <div className={styles.sizeStack}>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>XS</span>
            <p style={{ fontSize: 'var(--font-size-xs)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-xs (12px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>SM</span>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-sm (14px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>BASE</span>
            <p style={{ fontSize: 'var(--font-size-base)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-base (16px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>LG</span>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-lg (18px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>XL</span>
            <p style={{ fontSize: 'var(--font-size-xl)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-xl (20px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>2XL</span>
            <p style={{ fontSize: 'var(--font-size-2xl)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-2xl (24px)</code>
          </div>
          <div className={styles.sizeRow}>
            <span className={styles.sizeLabel}>3XL</span>
            <p style={{ fontSize: 'var(--font-size-3xl)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code>--font-size-3xl (30px)</code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className={styles.section}>
        <h2>Font Weights</h2>
        <div className={styles.weightStack}>
          <p style={{ fontWeight: 'var(--font-weight-normal)', fontSize: 'var(--font-size-xl)' }}>
            Normal (400) - The quick brown fox
          </p>
          <p style={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-xl)' }}>
            Medium (500) - The quick brown fox
          </p>
          <p style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-xl)' }}>
            Semibold (600) - The quick brown fox
          </p>
          <p style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-xl)' }}>
            Bold (700) - The quick brown fox
          </p>
        </div>
      </section>

      {/* Line Heights */}
      <section className={styles.section}>
        <h2>Line Heights</h2>
        <div className={styles.lineHeightStack}>
          <div className={styles.lineHeightExample}>
            <h3>Tight (1.25)</h3>
            <p style={{ lineHeight: 'var(--line-height-tight)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <code>--line-height-tight</code>
          </div>
          <div className={styles.lineHeightExample}>
            <h3>Normal (1.5)</h3>
            <p style={{ lineHeight: 'var(--line-height-normal)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <code>--line-height-normal</code>
          </div>
          <div className={styles.lineHeightExample}>
            <h3>Relaxed (1.75)</h3>
            <p style={{ lineHeight: 'var(--line-height-relaxed)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <code>--line-height-relaxed</code>
          </div>
        </div>
      </section>

      {/* Letter Spacing */}
      <section className={styles.section}>
        <h2>Letter Spacing</h2>
        <div className={styles.spacingStack}>
          <div>
            <p style={{ letterSpacing: 'var(--letter-spacing-tight)', fontSize: 'var(--font-size-lg)' }}>
              Tight Letter Spacing (-0.05em)
            </p>
            <code>--letter-spacing-tight</code>
          </div>
          <div>
            <p style={{ letterSpacing: 'var(--letter-spacing-normal)', fontSize: 'var(--font-size-lg)' }}>
              Normal Letter Spacing (0)
            </p>
            <code>--letter-spacing-normal</code>
          </div>
          <div>
            <p style={{ letterSpacing: 'var(--letter-spacing-wide)', fontSize: 'var(--font-size-lg)' }}>
              Wide Letter Spacing (0.05em)
            </p>
            <code>--letter-spacing-wide</code>
          </div>
        </div>
      </section>

      {/* Typography in Context */}
      <section className={styles.section}>
        <h2>Typography in Context</h2>
        <div className={styles.contextExample}>
          <h1 style={{ fontFamily: 'var(--font-family-brand)' }}>
            Display Heading
          </h1>
          <h2>Section Heading</h2>
          <h3>Subsection Heading</h3>
          <p>
            Body text with <strong>bold emphasis</strong> and <em>italic emphasis</em>. 
            This is how regular paragraph text appears with the default styling.
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-subtle)' }}>
            Small supporting text or captions use a smaller font size.
          </p>
          <code style={{ display: 'block', padding: 'var(--spacing-3)', marginTop: 'var(--spacing-2)' }}>
            const example = "Monospace code block";
          </code>
        </div>
      </section>
    </div>
  );
}
