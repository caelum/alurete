'use client';

import React, { useState } from 'react';
import { Alert } from '@/components/Alert';
import styles from './page.module.css';

export default function AlertPage() {
  const [variant, setVariant] = useState<'success' | 'error' | 'warning' | 'info'>('info');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('Este é um exemplo de alerta interativo.');
  const [showActions, setShowActions] = useState(false);
  const [closable, setClosable] = useState(true);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<Alert
  variant="${variant}"${title ? `\n  title="${title}"` : ''}${closable ? '' : '\n  closable={false}'}${showActions ? '\n  showActions' : ''}
>
  ${message}
</Alert>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Alert</h1>
        <p className={styles.description}>
          Mensagens de feedback para comunicar informações importantes ao usuário.
          Use o playground abaixo para testar as diferentes variações.
        </p>
      </div>

      <div className={styles.playground}>
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label htmlFor="variant">Variante</label>
            <select
              id="variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value as any)}
              className={styles.select}
            >
              <option value="info">Info</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="title">Título (Opcional)</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título padrão da variante"
              className={styles.input}
            />
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="message">Mensagem</label>
            <input
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.toggles}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={showActions}
                onChange={(e) => setShowActions(e.target.checked)}
              />
              Mostrar Ações
            </label>

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={closable}
                onChange={(e) => setClosable(e.target.checked)}
              />
              Botão Fechar
            </label>
          </div>
        </div>

        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            Preview
          </div>
          <div className={styles.preview}>
            <div className={styles.previewContent}>
              <Alert
                variant={variant}
                title={title}
                closable={closable}
                showActions={showActions}
                onClose={() => console.log('Closed')}
                onPrimaryAction={() => console.log('Primary action')}
                onSecondaryAction={() => console.log('Secondary action')}
              >
                {message}
              </Alert>
            </div>
          </div>

          <div className={styles.codeSection}>
            <div className={styles.codeHeader}>
              <div className={styles.windowControls}>
                <div className={`${styles.dot} ${styles.dotRed}`} />
                <div className={`${styles.dot} ${styles.dotYellow}`} />
                <div className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <button onClick={handleCopy} className={styles.copyButton}>
                {copied ? 'Copiado!' : 'Copiar Código'}
              </button>
            </div>
            <pre className={styles.codeBlock}>
              {codeSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
